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

export function getUserData(user, cb) {
  var userData = readDocument('users', user);
  emulateServerReturn(userData, cb);
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
  for (var i = 0; i < items.length; i++){
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

export function getCategoryListings(category, cb) {
  var itemDataList = []
  var itemListings = readFullCollection('item_listings');
  for(var i=1; i<=Object.keys(itemListings).length; i++){
    var item = readDocument('item_listings', i)
    if(item._id == category && item.active == 1){
      itemDataList.push(item);
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