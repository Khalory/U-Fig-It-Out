var database = require('./database')
var readDocument = database.readDocument

var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var getCollection = database.getCollection;
// Imports the express Node module.
var express = require('express');
var validate = require('express-jsonschema').validate;
var NewItemSchema = require('../schemas/itemlistings.json')
// Creates an Express server.
var app = express();

// You run the server from `server`, so `../client/build` is `server/../client/build`.
// '..' means "go up one directory", so this translates into `client/build`!
app.use(express.static('../client/build'));

var bodyParser = require('body-parser');
// Support receiving text in HTTP request bodies
app.use(bodyParser.text());
// Support receiving JSON in HTTP request bodies
app.use(bodyParser.json());

function getUserData(user) {
  var userData = readDocument('users', user)
  return userData
}

function getItemListings(itemIds) {
  if(itemIds.constructor !== Array) {
    itemIds = [itemIds]
  }
  var itemDataList = []
  for (var i = 0; i < itemIds.length; i++) {
    var itemData = readDocument("item_listings", itemIds[i])
    var userData = readDocument("users", itemData.owner)
    itemData.owner = userData
    itemDataList.push(itemData)
  }

  return itemDataList
}

//Get user info for a particular user
app.get('/user/:userid/info', function(req, res) {
  var userid = req.params.userid
  res.send(getUserData(userid))
})

app.post('/items', function(req, res) {
  res.send(getItemListings(req.body))
})

//Get all the categories in the database
app.get('/categories', function(req, res) {
    var allCategories = getCategories();
    res.send(allCategories);
    res.status(200);
});

//Helper function for app.get('/allcategories'...). Retrieves the list of
//categories from the database and returns it.
function getCategories() {
  var categoriesList = [];
  var categories = getCollection("categories");
  var length = Object.keys(categories).length;
  for(var i=1; i<=length; i++) {
    var category = readDocument("categories", i);
    categoriesList.push(category);
  }
  return categoriesList;
}

function storeListing(user, title, description, categories, preferred_payments, price, images, cb) {
  var newItem = {
    "owner": user,
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
  }
  newItem = addDocument('item_listings', newItem)
  var userdata = readDocument('user',user)

  userdata.items.push(newItem._id)
  writeDocument('user', userdata)
  /**
  for each(var cat in categories){
    var catdata = readDocument('categories',cat)
    catdata.items.unshift(newitem.id)
    writeDocument('categories',catdata)
  }
  */

//  emulateServerReturn(newItem, cb);
}

function getUserListings(user, bs, cb) {
  var itemDataList = []
  var itemListings = readFullCollection("item_listings");
  for(var i=1; i<=Object.keys(itemListings).length; i++){
    var item = readDocument("item_listings", i)
    if(user===item.owner && item.type===bs && item.active===1){
      itemDataList.push(item);
    }
  }
  emulateServerReturn(itemDataList, cb);
}

app.get('/categories/:categoryid', function(req, res) {
    var category = req.params.categoryid;
    res.send(getCategoryListings(category));
    res.status(200);
});

function getCategoryListings(category) {
  var itemDataList = []
  var itemListings = getCollection("item_listings");
  for(var i=1; i<=Object.keys(itemListings).length; i++){
    var item = readDocument("item_listings", i)
    for(var j=0; j<item.categories.length; j++)
      if(item.categories[j]==category && item.active==1){
        itemDataList.push(item);
      }
  }
  return itemDataList;
}

function getUserIdFromToken(authorizationLine) {
    try {
        // Cut off "Bearer " from the header value.
        var token = authorizationLine.slice(7);
        // Convert the base64 string to a UTF-8 string.
        var regularString = new Buffer(token, 'base64').toString('utf8');
        // Convert the UTF-8 string into a JavaScript object.
        var tokenObj = JSON.parse(regularString);
        var id = tokenObj['id'];
        // Check that id is a number.
        if (typeof id === 'number') {
            return id;
        } else {
            // Not a number. Return -1, an invalid ID.
            return -1;
        }
    } catch (e) {
        // Return an invalid ID.
        return -1;
    }
}

/*

Example
app.get('examplePath', function(req, res) {
  var userid = req.params.userid;
  var fromUser = getUserIdFromToken(req.get('Authorization'));
  // userid is a string. We need it to be a number.
  // Parameters are always strings.
  var useridNumber = parseInt(userid, 10);
  if (fromUser === useridNumber) {
    // Send response.
    res.send(getFeedData(userid));
  } else {
    // 401: Unauthorized request.
    res.status(401).end();
  }
});
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

app.post('/make_listing:id',validate({body: NewItemSchema}), function(req,res) {
  var body = req.body;
  var fromUser = getUserIdFromToken(req.get('Authrization'));
  //var fromUser = getuserIdFromToken(req.get('Authorization'));
  if(fromUser === body.owner){
    var newItem = storeListing(body.user,body.title,body.description,body.categories,body.preferred_payments,body.price);
    res.status(201);
    res.set('/make_listing/'+newItem._id)
    res.send(newItem)
  }else{res.status(401).end()

  }
});

// Starts the server on port 3000!
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
