'use strict';

var dbApi = require('./../dbLayer/mongo');

// all functions have to return promise

// service layer - db abstraction
// app will use service layer instead of working directly with db api, so replacing db would be easy
// there are 2 types of service layer APIs - low level, which maps one-to-one to db layer api, and higher level which use low level api to build custom app logic

function createPost(post) {
  // validation goes here...
  return dbApi.createPost(post);
}

function readPost(permalink) {
  return dbApi.readPost(permalink);
}

function readPostsByTag(tag) {
  return dbApi.readPostsByTag(tag);
}

function readAllPosts() {
  return dbApi.readAllPosts();
}

function updatePost(permalink, newData) {
  return dbApi.updatePost(permalink, newData);
}

function deletePost(permalink) {
  return dbApi.deletePost(permalink);
}

//////////////////////////////////////////////////

function createComment(permalink, comment) {
  return dbApi.createComment(permalink, comment);
}

function updateComment(permalink, newData) {
  return dbApi.createComment(permalink, newData);
}

function deleteComment(permalink, commentId) {
  return dbApi.deleteComment(permalink, commentId);
}

//////////////////////////////////////////////////

module.exports = {
  createPost: createPost,
  readPost: readPost,
  readPostsByTag: readPostsByTag,
  readAllPosts: readAllPosts,
  updatePost: updatePost,
  deletePost: deletePost,
  createComment: createComment,
  updateComment: updateComment,
  deleteComment: deleteComment
}
