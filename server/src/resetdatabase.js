var ObjectID = require('mongodb').ObjectID;

// Put your startup's name here (only letters and numbers -- no spaces, apostrophes, or special characters!)
var databaseName = "UFigItOut";
// Put the initial mock objects here.
var initialData = {
  "users": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "username": "FigMan",
      "password": "figlover24",
      "email": "figman24@umass.edu",
      "profile_picture": "img/fig-man.jpg",
      "avg_rating": 4,
      "num_ratings": 22,
      "items": [
        new ObjectID("000000000000000000000001")
      ]
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "username": "tRich",
      "password": "ilovewebprogramming",
      "email": "trichards@umass.edu",
      "profile_picture": "img/totally-tim-richards.jpeg",
      "avg_rating": 5,
      "num_ratings": 8,
      "items": [
        new ObjectID("000000000000000000000002")
      ]
    }
  },
  "item_listings": {
    "1": {
      "_id": new ObjectID("000000000000000000000001"),
      "owner": new ObjectID("000000000000000000000001"),
      "title": "CS 311 Textbook",
      "description": "Like new, has no markings whatsoever!",
      "categories": [
        new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002"), new ObjectID("000000000000000000000003")
      ],
      "preferred_payments": [
        1, 2, 3
      ],
      "timestamp": 1453690800000,
      "last_updated": 1453690800000,
      //0=inactive, 1=active
      "active": 1,
      "price": 50.00,
      //0=sellListing, 1=buyListing
      "type": 0,
      "images": [
        "img/AlgorithmsTextbook.jpeg"
      ],
      "rating": null
    },
    "2": {
      "_id": new ObjectID("000000000000000000000002"),
      "owner": new ObjectID("000000000000000000000002"),
      "title": "Top Quality Fig - CHEAP!",
      "description": "This is the best fig ever, grown in a garden of magic beans which has numerous giant beanstocks. In fact, this fig\
                      actually grew on one of the giant bean stocks, thus being imbued with the power of giants. You won't find another\
                      fig like this ever, especially not for this cheap, cheap price because I don't like figs very much.",
      "categories": [
        new ObjectID("000000000000000000000000"), new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")
      ],
      "preferred_payments": [
        1, 2, 5, 4
      ],
      "timestamp": 1453690890000,
      "last_updated": 1453690800000,
      //0=inactive, 1=active
      "active": 1,
      "price": 13.37,
      //0=sellListing, 1=buyListing
      "type": 0,
      "images": [
        "img/figs-1.jpg",
        "img/figs-2.jpg",
        "img/figs-3.jpg"
      ],
      "rating": null
    }
  },
  "categories": {
    1:{
      "_id": new ObjectID("000000000000000000000001"),
      "name": "BOOKS",
      "items": [
        new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")
      ]
    },
    2:{
      "_id": new ObjectID("000000000000000000000002"),
      "name": "Textbooks",
      "items": [
        new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")
      ]
    },
    3:{
      "_id": new ObjectID("000000000000000000000003"),
      "name": "Non-textbooks",
      "items": [
        new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002")
      ]
    },
    4:{
      "_id": new ObjectID("000000000000000000000004"),
      "name": "CARS",
      "items": []
    },
    5:{
      "_id": new ObjectID("000000000000000000000005"),
      "name": "Vehicles",
      "items": []
    },
    6:{
      "_id": new ObjectID("000000000000000000000006"),
      "name": "Automotive Accessories",
      "items": []
    },
    7:{
      "_id": new ObjectID("000000000000000000000007"),
      "name": "CLOTHING",
      "items": []
    },
    8:{
      "_id": new ObjectID("000000000000000000000008"),
      "name": "Men",
      "items": []
    },
    9:{
      "_id": new ObjectID("000000000000000000000009"),
      "name": "Women",
      "items": []
    },
    10:{
      "_id": new ObjectID("000000000000000000000010"),
      "name": "HOUSEHOLD",
      "items": []
    },
    11:{
      "_id": new ObjectID("000000000000000000000011"),
      "name": "Furniture",
      "items": []
    },
    12:{
      "_id": new ObjectID("000000000000000000000012"),
      "name": "Refrigerators and Appliances",
      "items": []
    },
    13:{
      "_id": new ObjectID("000000000000000000000013"),
      "name": "Other Items",
      "items": []
    },
    14:{
      "_id": new ObjectID("000000000000000000000014"),
      "name": "FIGS",
      "items": []
    },
    15:{
      "_id": new ObjectID("000000000000000000000015"),
      "name": "ELECTRONICS",
      "items": []
    },
    16:{
      "_id": new ObjectID("000000000000000000000016"),
      "name": "iClickers",
      "items": []
    },
    17:{
      "_id": new ObjectID("000000000000000000000017"),
      "name": "Cell Phones",
      "items": []
    },
    18:{
      "_id": new ObjectID("000000000000000000000018"),
      "name": "TVs",
      "items": []
    },
    19:{
      "_id": new ObjectID("000000000000000000000019"),
      "name": "Other Electronic Items",
      "items": []
    },
    20:{
      "_id": new ObjectID("000000000000000000000020"),
      "name": "COMPUTERS",
      "items": []
    },
    21:{
      "_id": new ObjectID("000000000000000000000021"),
      "name": "Laptops",
      "items": []
    },
    22:{
      "_id": new ObjectID("000000000000000000000022"),
      "name": "Desktops",
      "items": []
    },
    23:{
      "_id": new ObjectID("000000000000000000000023"),
      "name": "Computing Accessories",
      "items": []
    },
    24:{
      "_id": new ObjectID("000000000000000000000024"),
      "name": "VIDEO GAMES",
      "items": []
    },
    25:{
      "_id": new ObjectID("000000000000000000000025"),
      "name": "Consoles",
      "items": []
    },
    26:{
      "_id": new ObjectID("000000000000000000000026"),
      "name": "Games",
      "items": []
    },
    27:{
      "_id": new ObjectID("000000000000000000000027"),
      "name": "Gaming Accessories",
      "items": []
    }
  },
  "preferred_payments": {
    1: {
      "_id": new ObjectID("000000000000000000000001"),
      "name": "Venmo"
    },
    2: {
      "_id": new ObjectID("000000000000000000000002"),
      "name": "Paypal"
    },
    3: {
      "_id": new ObjectID("000000000000000000000003"),
      "name": "Figs"
    },
    4: {
      "_id": new ObjectID("000000000000000000000004"),
      "name": "Cash"
    },
    5: {
      "_id": new ObjectID("000000000000000000000005"),
      "name": "Check"
    },
    6: {
      "_id": new ObjectID("000000000000000000000006"),
      "name": "Barter"
    },
    7: {
      "_id": new ObjectID("000000000000000000000007"),
      "name": "Bank Transfer"
    }
  },
  "conversation": {
    1: {
      "_id": new ObjectID("000000000000000000000001"),
      "u1": new ObjectID("000000000000000000000001"),
      "u2": new ObjectID("000000000000000000000002"),
      "messages": [
        new ObjectID("000000000000000000000001"), new ObjectID("000000000000000000000002"), new ObjectID("000000000000000000000003"), new ObjectID("000000000000000000000004"), new ObjectID("000000000000000000000005")
      ]
    }
  },
  "messages": {
    1: {
      "_id": new ObjectID("000000000000000000000001"),
      "author": new ObjectID("000000000000000000000001"),
      "timestamp": 1453668490000,
      "content": "I need help"
    },
    2: {
      "_id": new ObjectID("000000000000000000000002"),
      "author": new ObjectID("000000000000000000000002"),
      "timestamp": 1453669500000,
      "content": "With what?"
    },
    3: {
      "_id": new ObjectID("000000000000000000000003"),
      "author": new ObjectID("000000000000000000000001"),
      "timestamp": 1453670510000,
      "content": "Workshop 8 is too hard"
    },
    4: {
      "_id": new ObjectID("000000000000000000000004"),
      "author": new ObjectID("000000000000000000000002"),
      "timestamp": 1453671520000,
      "content": "I will extend it to next Friday"
    },
    5: {
      "_id": new ObjectID("000000000000000000000005"),
      "author": new ObjectID("000000000000000000000001"),
      "timestamp": 1453672530000,
      "content": "thanks bro"
    }
  }
};

function createIndices(db, cb) {
  db.collection('item_listings').createIndex({title:'text', description:'text'}, cb)
}

/**
 * Resets a collection.
 */
function resetCollection(db, name, cb) {
  // Drop / delete the entire object collection.
  db.collection(name).drop(function() {
    // Get all of the mock objects for this object collection.
    var collection = initialData[name];
    var objects = Object.keys(collection).map(function(key) {
      return collection[key];
    });
    // Insert objects into the object collection.
    db.collection(name).insertMany(objects, cb);
  });
}

/**
 * Reset the MongoDB database.
 * @param db The database connection.
 */
function resetDatabase(db, cb) {
  // The code below is a bit complex, but it basically emulates a
  // "for" loop over asynchronous operations.
  var collections = Object.keys(initialData);
  var i = 0;

  // Processes the next collection in the collections array.
  // If we have finished processing all of the collections,
  // it triggers the callback.
  function processNextCollection() {
    if (i < collections.length) {
      var collection = collections[i];
      i++;
      // Use myself as a callback.
      resetCollection(db, collection, processNextCollection);
    } else {
      createIndices(db, cb);
    }
  }

  // Start processing the first collection!
  processNextCollection();
}

// Check if called directly via 'node', or required() as a module.
// http://stackoverflow.com/a/6398335
if(require.main === module) {
  // Called directly, via 'node src/resetdatabase.js'.
  // Connect to the database, and reset it!
  var MongoClient = require('mongodb').MongoClient;
  var url = 'mongodb://localhost:27017/' + databaseName;
  MongoClient.connect(url, function(err, db) {
    if (err) {
      throw new Error("Could not connect to database: " + err);
    } else {
      console.log("Resetting database...");
      resetDatabase(db, function() {
        console.log("Database reset!");
        // Close the database connection so NodeJS closes.
        db.close();
      });
    }
  });
} else {
  // require()'d.  Export the function.
  module.exports = resetDatabase;
}
