var PostsService = require('../serviceLayer/posts');
var respondToClient = require('./respondToClient');

// GET api/posts
exports.getAllPosts = (req, res) => {
  respondToClient(PostsService.readAllPosts(), res, true);
};

// POST api/posts
exports.createPost = (req, res) => {
  var post = req.body.post;

  respondToClient(PostsService.createPost(post), res);
};

// PUT api/posts
exports.updatePost = (req, res) => {
  var post = req.body.post;

  respondToClient(PostsService.updatePost(post), res);
};

// DELETE api/posts/:permalink
exports.deletePost = (req, res) => {
  var permalink = req.params.permalink;

  respondToClient(PostsService.deletePost(permalink), res);
};

// POST api/posts/:permalink/comments
exports.createComment = (req, res) => {
  var comment = req.body.comment;
  var permalink = req.params.permalink;
  respondToClient(PostsService.createComment(permalink, comment), res);
};