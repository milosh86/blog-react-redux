'use strict';
var Promise = require('bluebird');
var Mongo = Promise.promisifyAll(require("mongodb"));
var MongoClient = Mongo.MongoClient;

let connect = Promise.coroutine(function* () {
  try {
    console.log('Connecting ...');
    return yield MongoClient.connectAsync('mongodb://localhost:27017/test');
  } catch (e) {
    console.log('Could not connect to DB instance...', e);
  }
});

let dbInstance = connect();

let execDbOperation = Promise.coroutine(function* (collectionName, operation, args) {
  let db = yield dbInstance;
  let collection = db.collection(collectionName);

  try {
    return yield collection[operation].apply(collection, args);
  }

  catch (e) {
    console.log(`Failed to execute ${operation} operation...`, args);
    throw e;
  }
});

module.exports = {

  createProfile: Promise.coroutine(function* (userId, profile) {
    profile._id = userId;
    return yield execDbOperation('profiles', 'insertAsync', [profile]);
  }),

  updateProfile: Promise.coroutine(function* (userId, newData) {
    return yield execDbOperation('profiles', 'updateAsync', [{_id: userId}, newData]);
  }),

  deleteProfile: Promise.coroutine(function* (userId) {
    return yield execDbOperation('profiles', 'removeAsync', [{_id: userId}]);
  }),

  readProfile: Promise.coroutine(function* (userId) {
    return yield execDbOperation('profiles', 'findOneAsync', [{_id: userId}]);
  }),

  ///////////////////////////////

  createPost: Promise.coroutine(function* (post) {
    post._id = post.permalink;
    return yield execDbOperation('posts', 'insertAsync', [post]);
  }),

  updatePost: Promise.coroutine(function* (permalink, newData) {
    return yield execDbOperation('posts', 'updateAsync', [{_id: permalink}, {$set: {body: newData}}]);
  }),

  deletePost: Promise.coroutine(function* (permalink) {
    return yield execDbOperation('posts', 'removeAsync', [{_id: permalink}]);
  }),

  readPost: Promise.coroutine(function* (permalink) {
    return yield execDbOperation('posts', 'findOneAsync', [{_id: permalink}]);
  }),

  readPostsByTag: Promise.coroutine(function* (tag) {
    return (yield execDbOperation('posts', 'findAsync', [{tags: tag}])).toArray();
  }),

  readAllPosts: Promise.coroutine(function* () {
    let posts = yield execDbOperation('posts', 'findAsync', []);
    return posts.toArray();
  }),

  createComment: Promise.coroutine(function* (permalink, comment) {
    return yield execDbOperation('posts', 'updateAsync', [{_id: permalink}, {$push: {comments: comment}}]);
  }),

  updateComment: Promise.coroutine(function* (permalink, commentId, newComment) {
    return yield execDbOperation('posts', 'updateAsync', [
      {
        _id: permalink,
        comments: {_id: commentId}
      },
      {
        $set: {'comments.$': newComment}
      }
    ]);
  }),

  deleteComment: Promise.coroutine(function* (permalink, commentId) {
    return yield execDbOperation('posts', 'updateAsync',
      [{_id: permalink},
        {
          $pull: {
            comments: {
              _id: commentId
            }
          }
        }]
    );
  })

};
