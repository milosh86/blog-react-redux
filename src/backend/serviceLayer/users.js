var dbApi = require('./../dbLayer/mongo');

module.exports = {
  readUser: function (username) {
    return dbApi.readUser(username).then(user => {
      if (user) return user;
      throw new Error('User not found')
    });
  },

  validatePassword: function (user, password) {
    return user.password === password;
  }
};