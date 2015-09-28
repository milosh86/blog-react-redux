'use strict';
// higher level service layer api
var posts = require('./posts');
var profile = require('./profile');
var Promise = require('bluebird');

module.exports = {
  getAppData: Promise.coroutine(function* () {
    let allPosts = posts.readAllPosts();
    let myProfile = profile.readProfile('mdz');

    return {
      profile: yield myProfile,
      posts: yield allPosts
    }
  })
};