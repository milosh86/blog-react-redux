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
  if (!validateProfile(newData)) {
    return Promise.reject('Invalid profile data');
  }

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

//////////////////////////////////////////////////

function validateProfile(data) {
  if (
    data.firstName &&
    data.lastName &&
    data.punchLine
  ) {
    return true;
  }

  return false;
}