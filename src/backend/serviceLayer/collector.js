'use strict';
// higher level service layer api
var posts = require('./posts');
var profile = require('./profile');
var Promise = require('bluebird');

module.exports = {
  getAppData: Promise.coroutine(function* () {
    let allPosts = posts.readAllPosts();
    let myProfile = profile.readProfile('mdz');

    allPosts = yield allPosts;
    myProfile = yield myProfile;

    if (!myProfile || !allPosts) {
      console.log('profile', myProfile);
      console.log('posts', allPosts);
      throw new Error('Collecting data failed. No profile or posts data!');
    }
    return {
      profile: myProfile,
      posts: allPosts
    }
  })
};