var database = require('./database');
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;
var itemListingSchema = require('./schemas/itemlistings.json');
// Support receiving text in HTTP request bodies
app.use(bodyParser.text());
// Support receiving JSON in HTTP request bodies
app.use(bodyParser.json());
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
  var userdata = readDocument('user',user)

  userdata.items.unshift(newitem._id)
  writeDocument('user',userdata)

for each(var cat in categories){
  var catdata = readDocument('categories',cat)
  catdata.items.unshift(newitem.id)
  writeDocument('categories',catdata)
}

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

export function getCategoryListings(category, cb) {
  var itemDataList = []
  var itemListings = readFullCollection("item_listings");
  for(var i=1; i<=Object.keys(itemListings).length; i++){
    var item = readDocument("item_listings", i)
    for(var j=0; j<item.categories.length; j++)
      if(item.categories[j]===category && item.active===1){
        console.log(item._id)
        itemDataList.push(item);
      }
  }
  emulateServerReturn(itemDataList, cb);
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

/*s

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
