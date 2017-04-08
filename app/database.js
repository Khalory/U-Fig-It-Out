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
      "num_ratings": 22
    },
    "2": {
      "_id": 2,
      "username": "tRich",
      "password": "ilovewebprogramming",
      "email": "trichards@umass.edu",
      "profile_picture": "img/fig-man.jpg",
      "avg_rating": 5,
      "num_ratings": 8
    }
  },
  "item_listings": {
    "1": {
      "_id": 1,
      "owner": 1,
      "title": "CS 311 Textbook",
      "description": "Like new, has no markings whatsoever!",
      "categories": [
        1, 2
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
      "pictures": [
        "img/AlgorithmsTextbook.jpeg"
      ],
      "rating": null
    }
  },
  "categories": {
    1:{
      "_id": 1,
      "name": "Books"
    },
    2:{
      "_id": 2,
      "name": "Textbooks"
    },
    3:{
      "_id": 3,
      "name": "Non-textbooks"
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
  "conersation": {
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
class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}
