var passport = require('passport');
var http = require('passport-http');
var UserService = require('../src/backend/serviceLayer/users');

module.exports = function() {
  passport.use(new http.BasicStrategy((username, password, done) => {
    UserService.readUser(username)
      .then((user) => {
        return UserService.validatePassword(user, password) ?
          user :
          false;

      })

      .then(result => done(null, result))

      .catch(() => done(null, false));
  }));
}
