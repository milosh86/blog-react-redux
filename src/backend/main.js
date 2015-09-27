'use strict';
var Promise = require('bluebird');

var posts = require('./serviceLayer/posts')
var profile = require('./serviceLayer/profile')
var collector = require('./serviceLayer/collector')

console.log('Running main...')

Promise.coroutine(function* () {
  yield posts.deletePost('test');
  let data = yield collector.getAppData();
  return data
})().then((data) => {console.log('DATA: ', data)});
