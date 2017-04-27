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

var token = 'eyJpZCI6MX0=' //Need to figure out our token
/**
 * Properly configure+send an XMLHttpRequest with error handling,
 * authorization token, and other needed properties.
 */
function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  xhr.setRequestHeader('Authorization', 'Bearer ' + token);

  // The below comment tells ESLint that FigError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global FigError */

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
      FigError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    FigError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    FigError('Could not ' + verb + " " + resource + ": Request timed out.");
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

/**
* Given a feed item ID, returns a FeedItem object with references resolved.
* Internal to the server, since it's synchronous.
*/
function getFeedItemSync(feedItemId) {
  var feedItem = readDocument('feedItems', feedItemId);
  // Resolve 'like' counter.
  feedItem.likeCounter =
  feedItem.likeCounter.map((id) => readDocument('users', id));
  // Assuming a StatusUpdate. If we had other types of
  // FeedItems in the DB, we would
  // need to check the type and have logic for each type.
  feedItem.contents.author =
  readDocument('users', feedItem.contents.author);
  // Resolve comment author.
  feedItem.comments.forEach((comment) => {
    comment.author = readDocument('users', comment.author);
    comment.likeCounter = comment.likeCounter.map((id) => readDocument('users', id));
  });
  return feedItem;
}

// Private server function
function storeImage(image) {
  var img = addDocument('images', {
    image: image.file
  })
  return img._id + '.' + image.name.split('.')[1]
}

export function storeListing(user, title, description, categories, preferred_payments, price, images, cb){
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
  emulateServerReturn(newItem, cb);
}

export function getItemListings(items, cb){
  if(items.constructor !== Array){
    items = [items]
  }
  var itemDataList = []
  for (var i = 0; i < items.length; i++) {
    var itemData = readDocument('item_listings', items[i])
    var userData = readDocument('users', itemData.owner)
    var imageData = itemData.images.map((imageId) => {
      return readDocument('images', imageId)
    })
    itemData.owner = userData
    itemData.images = imageData
    itemDataList.push(itemData)
  }
  emulateServerReturn(itemDataList, cb);

}

/**
export function getUserListings(user, bs, cb) {
  var itemDataList = []
  var itemListings = readFullCollection('item_listings');
  for(var i=1; i<=Object.keys(itemListings).length; i++){
    var item = readDocument('item_listings', i)
    if(user===item.owner && item.type===bs && item.active===1){
      itemDataList.push(item);
    }
  }
  emulateServerReturn(itemDataList, cb);
}
*/

export function getCategoryListings(category, cb) {
  var itemDataList = []
  var itemListings = readFullCollection('item_listings');
  for(var i=1; i<=Object.keys(itemListings).length; i++) {
    var item = readDocument("item_listings", i)
    if (item.active == 0)
      continue;

    for(var j=0; j< item.categories.length; j++){
      if(item.categories[j] == category) {
        itemDataList.push(item);
      }
    }
  }
  emulateServerReturn(itemDataList, cb);
}

export function getPreferredPayments(cb) {
  var preferredPaymentList = []
  var preferredPayments = readFullCollection('preferred_payments');
  for(var i = 1; i <= Object.keys(preferredPayments).length; i++){
    preferredPaymentList.push(readDocument('preferred_payments', i))
  }
  emulateServerReturn(preferredPaymentList, cb);
}