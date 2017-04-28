import React from 'react';
import ReactDOM from 'react-dom';

var initialData = {
  "users": {
    "1": {
      "_id": 1,
      "username": "FigMan",
      "password": "figlover24",
      "email": "figman24@umass.edu",
      "profile_picture": "img/fig-man.jpg",
      "avg_rating": 4,
      "num_ratings": 22,
      "items": [
        1
      ]
    },
    "2": {
      "_id": 2,
      "username": "tRich",
      "password": "ilovewebprogramming",
      "email": "trichards@umass.edu",
      "profile_picture": "img/totally-tim-richards.jpeg",
      "avg_rating": 5,
      "num_ratings": 8,
      "items": [
        2
      ]
    }
  },
  "item_listings": {
    "1": {
      "_id": 1,
      "owner": 1,
      "title": "CS 311 Textbook",
      "description": "Like new, has no markings whatsoever!",
      "categories": [
        0, 1, 2
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
        1
      ],
      "rating": null
    },
    "2": {
      "_id": 2,
      "owner": 2,
      "title": "Top Quality Fig - CHEAP!",
      "description": "This is the best fig ever, grown in a garden of magic beans which has numerous giant beanstocks. In fact, this fig\
                      actually grew on one of the giant bean stocks, thus being imbued with the power of giants. You won't find another\
                      fig like this ever, especially not for this cheap, cheap price because I don't like figs very much.",
      "categories": [
        0, 1, 2
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
        2, 3, 4
      ],
      "rating": null
    }
  },
  "categories": {
    1:{
      "_id": 1,
      "name": "BOOKS",
      "items": [
        1, 2
      ]
    },
    2:{
      "_id": 2,
      "name": "Textbooks",
      "items": [
        1, 2
      ]
    },
    3:{
      "_id": 3,
      "name": "Non-textbooks",
      "items": [
        1, 2
      ]
    },
    4:{
      "_id": 4,
      "name": "CARS",
      "items": []
    },
    5:{
      "_id": 5,
      "name": "Vehicles",
      "items": []
    },
    6:{
      "_id": 6,
      "name": "Automotive Accessories",
      "items": []
    },
    7:{
      "_id": 7,
      "name": "CLOTHING",
      "items": []
    },
    8:{
      "_id": 8,
      "name": "Men",
      "items": []
    },
    9:{
      "_id": 9,
      "name": "Women",
      "items": []
    },
    10:{
      "_id": 10,
      "name": "HOUSEHOLD",
      "items": []
    },
    11:{
      "_id": 11,
      "name": "Furniture",
      "items": []
    },
    12:{
      "_id": 12,
      "name": "Refrigerators and Appliances",
      "items": []
    },
    13:{
      "_id": 13,
      "name": "Other Items",
      "items": []
    },
    14:{
      "_id": 14,
      "name": "FIGS",
      "items": []
    },
    15:{
      "_id": 15,
      "name": "ELECTRONICS",
      "items": []
    },
    16:{
      "_id": 16,
      "name": "iClickers",
      "items": []
    },
    17:{
      "_id": 17,
      "name": "Cell Phones",
      "items": []
    },
    18:{
      "_id": 18,
      "name": "TVs",
      "items": []
    },
    19:{
      "_id": 19,
      "name": "Other Electronic Items",
      "items": []
    },
    20:{
      "_id": 20,
      "name": "COMPUTERS",
      "items": []
    },
    21:{
      "_id": 21,
      "name": "Laptops",
      "items": []
    },
    22:{
      "_id": 22,
      "name": "Desktops",
      "items": []
    },
    23:{
      "_id": 23,
      "name": "Computing Accessories",
      "items": []
    },
    24:{
      "_id": 24,
      "name": "VIDEO GAMES",
      "items": []
    },
    25:{
      "_id": 25,
      "name": "Consoles",
      "items": []
    },
    26:{
      "_id": 26,
      "name": "Games",
      "items": []
    },
    27:{
      "_id": 27,
      "name": "Gaming Accessories",
      "items": []
    }
  },
  "preferred_payments": {
    1: {
      "_id": 1,
      "name": "Venmo"
    },
    2: {
      "_id": 2,
      "name": "Paypal"
    },
    3: {
      "_id": 3,
      "name": "Figs"
    },
    4: {
      "_id": 4,
      "name": "Cash"
    },
    5: {
      "_id": 5,
      "name": "Check"
    },
    6: {
      "_id": 6,
      "name": "Barter"
    },
    7: {
      "_id": 7,
      "name": "Bank Transfer"
    }
  },
  "conversation": {
    1: {
      "_id": 1,
      "u1": 1,
      "u2": 2,
      "messages": [
        1, 2, 3, 4, 5
      ]
    }
  },
  "messages": {
    1: {
      "_id": 1,
      "author": 1,
      "timestamp": 1453668490000,
      "content": "I need help"
    },
    2: {
      "_id": 2,
      "author": 2,
      "timestamp": 1453669500000,
      "content": "With what?"
    },
    3: {
      "_id": 3,
      "author": 1,
      "timestamp": 1453670510000,
      "content": "Workshop 8 is too hard"
    },
    4: {
      "_id": 4,
      "author": 2,
      "timestamp": 1453671520000,
      "content": "I will extend it to next Friday"
    },
    5: {
      "_id": 5,
      "author": 1,
      "timestamp": 1453672530000,
      "content": "thanks bro"
    }
  },
  "images": {
    1: {
      "_id": 1,
      "name": "img/AlgorithmsTextbook.jpeg"
    },
    2: {
      "_id": 2,
      "name": "img/figs-1.jpg"
    },
    3: {
      "_id": 3,
      "name": "img/figs-2.jpg"
    },
    4: {
      "_id": 4,
      "name": "img/figs-3.jpg"
    }
  }

};

var data = JSON.parse(localStorage.getItem('fig_data'));
if (data === null) {
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
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

export function readFullCollection(collection) {
  return JSONClone(data[collection]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem('fig_data', JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem('fig_data', JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
export class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/resetdb');
        xhr.addEventListener('load', function() {
          window.alert("Database reset! Refreshing the page now...");
          document.location.reload(false);
        });
        xhr.send();
      }}>Reset Mock DB</button>
    );
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);
