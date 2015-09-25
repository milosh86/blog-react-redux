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
    yield collection[operation].apply(collection, args);
  }

  catch (e) {
    console.log(`Failed to execute ${operation} operation...`, args);
    throw e;
  }
});

module.exports = {

  createProfile: Promise.coroutine(function* (userId, profile) {
    profile._id = userId;
    yield execDbOperation('profiles', 'insertAsync', [profile]);
  }),

  updateProfile: Promise.coroutine(function* (userId, newData) {
    yield execDbOperation('profiles', 'updateAsync', [{_id: userId}, newData]);
  })

};
