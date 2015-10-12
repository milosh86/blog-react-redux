var BlogActions = require('../constants/BlogConstants');
var posts = require('./serviceLayer/posts');
var profile = require('./serviceLayer/profile');

module.exports = function (action) {
  switch (action.type) {

    case BlogActions.CREATE_POST:
      var post = action.post;
      post.permalink =  post.title.replace(/\s/g, '-');
      post.comments = [];
      posts.createPost(post);
      break;

    //case BlogActions.UPDATE_POST:
    //  posts.updatePost(action.id, action.data);
    //  break;
    //
    //case BlogActions.REMOVE_POST:
    //  posts.deletePost(action.id);
    //  break;

    case BlogActions.CREATE_COMMENT:
      //posts.createComment(action.postId, action.comment);
      break;

    default:
      console.log('Unknown action received: ', action);

  }
};
