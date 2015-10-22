var PostHandlers = require('./posts');
var ProfileHandlers = require('./profile');
var passport = require('passport');

module.exports = (app) => {
  app.get('/api/profile/:userId', ProfileHandlers.getProfile);
  app.put('/api/profile/:userId',
    passport.authenticate('basic', {session: false}),
    ProfileHandlers.updateProfile);

  app.get('/api/posts', PostHandlers.getAllPosts);
  app.post('/api/posts',
    passport.authenticate('basic', {session: false}),
    PostHandlers.createPost);
  app.put('/api/posts', passport.authenticate('basic', {session: false}),
    PostHandlers.updatePost);
  app.delete('/api/posts/:permalink', passport.authenticate('basic', {session: false}),
    PostHandlers.deletePost);

  app.post('/api/posts/:permalink/comments', PostHandlers.createComment);
  app.delete('/api/posts/:permalink/comments',
    passport.authenticate('basic', {session: false}),
    PostHandlers.deleteComment);

};