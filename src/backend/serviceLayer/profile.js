'use strict';

var dbApi = require('./../dbLayer/mongo');

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

module.exports = {
  createProfile: createProfile,
  readProfile: readProfile,
  updateProfile: updateProfile,
  deleteProfile: deleteProfile
}
