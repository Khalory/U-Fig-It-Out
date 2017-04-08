import {readDocument, writeDocument, addDocument} from './database';

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
