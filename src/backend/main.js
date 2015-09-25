'use strict';
var Promise = require('bluebird');
var db = require('./../react-redux-blog/blog-react-redux/src/backend/dbInterface');

console.log('Running main...')

db.createProfile(11, {
  firstName: 'Milos',
  lastName: 'Dzepina',
  punchLine: 'Javascript Dev'
})
  .then(() => {
    console.log('Dummy profile saved');

    db.updateProfile(11, {
      firstName: 'Goran',
      lastName: 'Dzepinaaaaaa',
      punchLine: 'C++ Dev'
    })
      .then(() => {
        console.log('Dummy profile updated');
      });
  });


