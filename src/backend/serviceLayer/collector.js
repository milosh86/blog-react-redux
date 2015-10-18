'use strict';
// higher level service layer api
var posts = require('./posts');
var profile = require('./profile');
var Promise = require('bluebird');

module.exports = {
  getAppData: Promise.coroutine(function* () {
    let allPosts = posts.readAllPosts();
    let myProfile = profile.readProfile('mdz');

    if (!myProfile || !allPosts) {
      console.log('profile', myProfile);
      console.log('posts', allPosts);
      throw new Error('Collecting data failed. No profile or posts data!');
    }
    return {
      profile: yield myProfile,
      posts: yield allPosts
    }
  })
};