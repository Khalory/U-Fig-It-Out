var ObjectID = require('mongodb').ObjectID;

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

var data;
// If 'true', the in-memory object representing the database has changed,
// and we should flush it to disk.
var updated = false;
// Pull in Node's file system and path modules.
var fs = require('fs'),
  path = require('path');

try {
  // ./database.json may be missing. The comment below prevents ESLint from
  // complaining about it.
  // Read more about configuration comments at the following URL:
  // http://eslint.org/docs/user-guide/configuring#configuring-rules
  /* eslint "node/no-missing-require": "off" */
  data = require('./database.json');
} catch (e) {
  // ./database.json is missing. Use the seed data defined above
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  var collectionObj = data[collection];
  if (!collectionObj) {
    throw new Error(`Object collection ${collection} does not exist in the database!`);
  }
  var obj = collectionObj[id];
  if (obj === undefined) {
    throw new Error(`Object ${id} does not exist in object collection ${collection} in the database!`);
  }
  return JSONClone(data[collection][id]);
}
module.exports.readDocument = readDocument;

/**
 * Emulates writing a "document" to a NoSQL database.
 */
function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  if (id === undefined) {
    throw new Error(`You cannot write a document to the database without an _id! Use AddDocument if this is a new object.`);
  }
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  updated = true;
}
module.exports.writeDocument = writeDocument;

/**
 * Adds a new document to the NoSQL database.
 */
function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  if (newDoc.hasOwnProperty('_id')) {
    throw new Error(`You cannot add a document that already has an _id. addDocument is for new documents that do not have an ID yet.`);
  }
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}
module.exports.addDocument = addDocument;

/**
 * Deletes a document from an object collection.
 */
function deleteDocument(collectionName, id) {
  var collection = data[collectionName];
  if (!collection[id]) {
    throw new Error(`Collection ${collectionName} lacks an item with id ${id}!`);
  }
  delete collection[id];
  updated = true;
}
module.exports.deleteDocument = deleteDocument;

/**
 * Returns an entire object collection.
 */
function getCollection(collectionName) {
  return JSONClone(data[collectionName]);
}
module.exports.getCollection = getCollection;

/**
 * Reset the database.
 */
function resetDatabase() {
  data = JSONClone(initialData);
  updated = true;
}
module.exports.resetDatabase = resetDatabase;

// Periodically updates the database on the hard drive
// when changed.
setInterval(function() {
  if (updated) {
    fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(data), { encoding: 'utf8' });
    updated = false;
  }
}, 200);
