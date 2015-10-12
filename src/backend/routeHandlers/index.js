var PostHandlers = require('./posts');
var ProfileHandlers = require('./profile');

module.exports = (app) => {
  app.get('/api/profile', ProfileHandlers.getProfile);
  app.put('/api/profile', ProfileHandlers.updateProfile);

  app.get('/api/posts', PostHandlers.getAllPosts);
  app.post('/api/posts', PostHandlers.createPost);
  app.put('/api/posts', PostHandlers.updatePost);
  app.delete('/api/posts/:permalink', PostHandlers.deletePost);

};