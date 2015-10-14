var PostHandlers = require('./posts');
var ProfileHandlers = require('./profile');

module.exports = (app) => {
  app.get('/api/profile/:userId', ProfileHandlers.getProfile);
  app.put('/api/profile/:userId', ProfileHandlers.updateProfile);

  app.get('/api/posts', PostHandlers.getAllPosts);
  app.post('/api/posts', PostHandlers.createPost);
  app.put('/api/posts', PostHandlers.updatePost);
  app.delete('/api/posts/:permalink', PostHandlers.deletePost);

  app.post('/api/posts/:permalink/comments', PostHandlers.createComment);
  app.delete('/api/posts/:permalink/comments', PostHandlers.deleteComment);

};