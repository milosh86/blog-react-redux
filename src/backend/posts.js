'use strict';

var dbApi = require('./mongo');

// all functions have to return promise

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

function updatePost(postId, newData) {
  return dbApi.updatePost(userId, newData);
}

function deletePost(userId) {
  return dbApi.deletePost(userId);
}

//////////////////////////////////////////////////

function createComment(postId, comment) {
  return dbApi.createComment(postId, comment);
}

function updateComment(postId, newData) {
  return dbApi.createComment(postId, newData);
}

function deleteComment(postId, commentId) {
  return dbApi.deleteComment(postId, commentId);
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
