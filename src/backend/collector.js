var posts = require('./posts');
var profile = require('./profile');

module.exports = {
  getAppData: () => ({
    profile: profile.readProfile(),
    posts: posts.readAllPosts()
  })
};