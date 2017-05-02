
// Imports the express Node module.
var express = require('express');
var app = express();

var MongoDB = require('mongodb');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = MongoDB.ObjectID;
var url = 'mongodb://localhost:27017/UFigItOut';

MongoClient.connect(url, function(err, db) {
  if (err) {
    throw new Error("Could not connect to database: " + err);
  } else {
    console.log("Connected correctly to server.");
    // This is where we will kick off other actions that use the database!
  }

  var ResetDatabase = require('./resetdatabase');
  var validate = require('express-jsonschema').validate;
  var NewItemSchema = require('../schemas/itemlistings.json')
  // Creates an Express server.

  var mongo_express = require('../node_modules/mongo-express/lib/middleware');
  var mongo_express_config = require('../node_modules/mongo-express/config.default.js');
  var bodyParser = require('body-parser');

  // Support receiving text in HTTP request bodies
  app.use(bodyParser.text());
  // Support receiving JSON in HTTP request bodies
  app.use(bodyParser.json({limit: "50mb"}));
  app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
  app.use('/mongo_express', mongo_express(mongo_express_config));
  // You run the server from `server`, so `../client/build` is `server/../client/build`.
  // '..' means "go up one directory", so this translates into `client/build`!
  app.use(express.static('../client/build'));


  function getUserData(user, callback) {
    db.collection('users').findOne({
      _id: user
    }, function(err, userInfo) {
      if(err) {
        return callback(err)
      }
      else if(userInfo==null) {
        return callback(null, null)
      }
      callback(null, userInfo)
    })
  }

  function getItemListings(itemIds, callback) {
    if(itemIds.constructor !== Array) {
      itemIds = [itemIds]
    }

    itemIds = itemIds.map((itemId) => { return new ObjectID(itemId) })
    db.collection('item_listings').find({
      '_id': {
        '$in': itemIds
      }
    }).toArray((err, items) => {
      if (err)
        callback(err)

      var userIds = items.map((item) => { return item.owner })
      db.collection('users').find({
        '_id': {
          '$in': userIds
        }
      }).toArray((err, users) => {
        if (err)
          callback(err)

        var idToUserMap = {}
        users.forEach((user) => {
          idToUserMap[user._id] = user
        })
        items.forEach((item) => {
          item.owner = idToUserMap[item.owner]
        })
        callback(null, items)
      })
    })
  }

  //Get user info for a particular user
  app.get('/user/:userid/info', function(req, res) {
    var userid = req.params.userid
    getUserData(new ObjectID(userid), function(err, userInfo) {
      if(err) {
        res.status(500).send("Database error: " + err);
      }
      else if (userInfo === null) {
        res.status(400).send("Could not look up info for user " + userid);
      }
      else {
        res.send(userInfo);
      }
    })
  })

  app.post('/items', function(req, res) {
    getItemListings(req.body, (err, items) => {
      if(err) {
        res.status(500).send("Database error: " + err);
      }
      else if (items === null) {
        res.status(400).send("Failed to find itemIds for " + req.body);
      }
      else {
        res.send(items);
      }
    })
  })

  //Get all the categories in the database
  app.get('/categories', function(req, res) {
    db.collection('categories').find({}).toArray((err, categories) => {
      if (err) {
        sendDatabaseError(res, err);
      } else {
        res.send(categories)
        res.status(200)
      }
    });
  });

  app.get('/categories/:categoryid', function(req, res) {
      var category = new ObjectID(req.params.categoryid);
      db.collection('item_listings').find({categories: category, active: 1}).toArray((err, items) => {
        if (err) {
          sendDatabaseError(res, err);
        } else {
          var userIds = items.map((item) => { return item.owner })
          db.collection('users').find({
            '_id': {
              '$in': userIds
            }
          }).toArray((err, users) => {
            if (err)
              sendDatabaseError(res, err)

            var idToUserMap = {}
            users.forEach((user) => {
              idToUserMap[user._id] = user
            })
            items.forEach((item) => {
              item.owner = idToUserMap[item.owner]
            })
            console.log(items)
            res.send(items)
            res.status(200)
          })
        }
      });
  });

  function getUserIdFromToken(authorizationLine) {
    try {
        // Cut off "Bearer " from the header value.
        var token = authorizationLine.slice(7);
        // Convert the base64 string to a UTF-8 string.
        var regularString = new Buffer(token, 'base64').toString('utf8');
        // Convert the UTF-8 string into a JavaScript object.
        var tokenObj = JSON.parse(regularString);
        var id = tokenObj['id'];
        // Check that id is a string.
        if (typeof id === 'string') {
            return id;
        } else {
            // Not a number. Return an empty string, an invalid ID.
            return "";
        }
    } catch (e) {
        // Return an invalid ID.
        return -1;
    }
  }

  function storeListing(user, title, description, categories, preferred_payments, price, images, callback) {

    var newItem = {
      "owner":user,
      "title": title,
      "description": description,
      "categories": categories,
      "preferred_payments": preferred_payments,
      "timestamp": new Date().getTime(),
      "last_updated": new Date().getTime(),
      "active": 1,
      "price": price,
      "type": 0,
      "rating": null,
      "images": images
    };

    db.collection('item_listings').insertOne(newItem,function(err,result){
      if(err){
        return callback(err);
      }
      newItem._id = result.insertedId;
      console.log(user);
      db.collection('users').update({_id:user},
        {
          $push:{
              items: newItem._id
          }
      });
      newItem.categories.forEach((category) => {db.collection('categories').update({_id:category},
        {
          $push:{
              items: newItem._id
          }
      });
    });
      callback(null, result);
    });
}

/*
  app.get('/categories/:categoryid', function(req, res) {
      var category = req.params.categoryid;
      res.send(getCategoryListings(category));
      res.status(200);
  });

  function getCategoryListings(category) {
    var itemDataList = []

    var itemListings = database.search('item_listings', {categories: category})
    itemListings.forEach((item) => {
      for(var i = 0; i < item.categories.length; i++)
        if(item.categories[i] == category && item.active == 1) {
          itemDataList.push(item);
        }
    })
    return itemDataList;
  }
*/


  /*
  Start with app.POST/GET(ETC)
  */

  /**
   * Translate JSON Schema Validation failures into error 400s.
   */
  app.use(function(err, req, res, next) {
    if (err.name === 'JsonSchemaValidation') {
      // Set a bad request http response status
      res.status(400).end();
    } else {
      // It's some other sort of error; pass it to next error middleware handler
      next(err);
    }
  });
// Trent runs database from "C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe" --dbpath "U-Fig-it-out db"
  app.post('/make_listing/:id', function(req,res) {
    var body = req.body;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    if(fromUser == body.user) {
      var categories = body.categories.map((category) => {return new ObjectID(category)});
      storeListing(new ObjectID(fromUser),body.title,body.description,categories,body.preferred_payments,body.price, body.images, function(err,newItem){
        if (err) {
       // A database error happened.
       // 500: Internal error.
       res.status(500).send("A database error occurred: " + err);
     } else{
        // When POST creates a new resource, we should tell the client about it
        // in the 'Location' header and use status code 201.
        res.status(201);
        res.set('/make_listing/' + newItem._id)
        res.send(newItem)
      }
    });
  } else {
  // 401: Unauthorized.
  res.status(401).end();
}
});

  // Reset database.

  app.post('/resetdb', function(req, res) {
    console.log("Resetting database...");
    ResetDatabase(db, function() {
      res.send();
    });
  });


  /*
  app.post('/make_listing/:id', validate({body: NewItemSchema}), function(req,res) {
    var body = req.body;
    var fromUser = getUserIdFromToken(req.get('Authorization'));
    //var fromUser = getuserIdFromToken(req.get('Authorization'));
    if(fromUser === body.owner){
      var newItem = storeListing(body.user,body.title,body.description,body.categories,body.preferred_payments,body.price);
      res.status(201);
      res.set('/make_listing/'+newItem._id)
      res.send(newItem)
    }else{
      res.status(401).end()
    }
  });
  */
  function sendDatabaseError(res, err) {
    res.status(500).send("A database error occurred: " + err);
  }
  // Starts the server on port 3000!
  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
});
