import {readDocument, readFullCollection, writeDocument, addDocument} from './database';

/**
* Emulates how a REST call is *asynchronous* -- it calls your function back
* some time in the future with data.
*/
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 4);
}

var token = '' //Need to figure out our token
/**
 * Properly configure+send an XMLHttpRequest with error handling,
 * authorization token, and other needed properties.
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  // The below comment tells ESLint that FacebookError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global FacebookError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      FacebookError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}

export function getUserData(user, cb) {
  sendXHR('GET', '/user/' + user + '/info', undefined, (xhr) => {
    cb(JSON.parse(xhr.responseText))
  })
}

export function getCategories(cb) {
  var categoriesList = []
  var categories = readFullCollection("categories");
  var length = Object.keys(categories).length
  for(var i=1; i<=length; i++) {
    var category = readDocument("categories", i)
    categoriesList.push(category);
  }
  emulateServerReturn(categoriesList, cb);
}

export function storeListing(user,title,description,categories,preferred_payments,price, cb){
  var newItem = {
    "owner": user,
    "title": title,
    "description": description,
    "categories":categories,
    "preferred_payments":preferred_payments,
    "timestamp": new Date().getTime(),
    "last_updated": new Date().getTime(),
    "active": 1,
    "price": price,
    "type": 0,
    "rating": null

  };
  newItem = addDocument('item_listings', newItem)
  emulateServerReturn(newItem, cb);
}

export function getItemListings(items, cb){
  if(items.constructor !== Array){
    items = [items]
  }
  var itemDataList = [];
  for (var i = 0; i < items.length; i++){
    console.log(items[0])
    var itemData = readDocument("item_listings", items[i]);
    console.log(itemData)
    var userData = readDocument("users", itemData.owner);
    itemData.owner = userData
    itemDataList.push(itemData)
  }
  emulateServerReturn(itemDataList, cb);

}

/**
export function getUserListings(user, bs, cb) {
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
*/

export function getCategoryListings(category, cb) {
  var itemDataList = []
  var itemListings = readFullCollection("item_listings");
  for(var i=1; i<=Object.keys(itemListings).length; i++){
    var item = readDocument("item_listings", i)
    for(var j=0; j<item.categories.length; j++){
      if(item.categories[j]==category && item.active==1){
        itemDataList.push(item);
      }
    }
  }
  emulateServerReturn(itemDataList, cb);
}
