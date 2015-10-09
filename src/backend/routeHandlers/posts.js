var PostsService = require('../serviceLayer/posts');

// GET api/posts
exports.getAllPosts = (req, res) => {
  PostsService.readAllPosts().then((posts) => {
    res.json(posts);
  });
};

// POST api/posts
exports.createPost = (req, res) => {
  var post = req.body.post;

  PostsService.createPost(post)
    .then(() => {
      res.json({error: null});
    })
    .catch((error) => {
      res.json({error: error});
    });
};

// PUT api/posts
exports.updatePost = (req, res) => {
  var post = req.body.post;

  PostsService.updatePost(post)
    .then(() => {
      res.json({error: null});
    })
    .catch((error) => {
      res.json({error: error});
    });
};

// DELETE api/posts/:permalink
exports.deletePost = (req, res) => {
  var permalink = req.params.permalink;

  PostsService.deletePost(permalink)
    .then(() => {
      res.json({error: null});
    })
    .catch((error) => {
      res.json({error: error});
    });
};