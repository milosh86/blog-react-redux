var PostHandlers = require('./posts');
var ProfileHandlers = require('./profile');

module.exports = (app) => {
  app.get('/api/profile', ProfileHandlers.getProfile);
  
};