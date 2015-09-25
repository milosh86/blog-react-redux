'use strict';

var dbApi = require('./mongo');

// all functions have to return promise

function createProfile(userId, profile) {
  return dbApi.createProfile(userId, profile);
}

function readProfile(userId) {
  return dbApi.readProfile(userId);
}

function updateProfile(userId, newData) {
  return dbApi.updateProfile(userId, newData);
}

function deleteProfile(userId) {
  return dbApi.deleteProfile(userId);
}

//////////////////////////////////////////////////

function createPost(profile) {
  return dbApi.createPost(profile);
}

function readPost(postId) {
  return dbApi.readPost(userId);
}

function readAllPosts(userId) {
  return dbApi.readAllPosts(userId);
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
  createProfile: createProfile,
  updateProfile: updateProfile
}
