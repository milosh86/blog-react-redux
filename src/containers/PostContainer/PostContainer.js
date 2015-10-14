import Post from '../../components/Post/Post.js';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as postActions from '../../actions/posts.js';

import history from '../../history.js';

let _commentId = 4;

class PostContainer extends Component {
  static displayName = 'PostContainer';

  static propTypes = {
    params: React.PropTypes.shape({
      permalink: React.PropTypes.string
    }),
    posts: React.PropTypes.array.isRequired,
    dispatch: React.PropTypes.func.isRequired
  };

  handleNewComment = (comment) => {
    _commentId++;
    comment.id = _commentId;
    let {params, dispatch} = this.props;
    dispatch(postActions.createComment({data: comment, postId: params.permalink}));
  };

  handleDeleteComment = (comment) => {
    let {params, dispatch} = this.props;
    dispatch(postActions.deleteComment({data: comment, postId: params.permalink}));
  };

  render() {
    let permalink = this.props.params.permalink;
    let post = this.props.posts.filter(post => post.permalink === permalink);

    return (
       post.length ?
         <Post
           onPostClick={(perma) => Post.onPostClick(history, perma)}
           onNewComment={this.handleNewComment}
           onDeleteComment={this.handleDeleteComment}
           {...post[0]}/> :
         <div>'Could not find requested post'</div>
    );
  }
}

function select(state) {
  return {
    posts: state.posts,
    // if posts list get large and this become expensive operation, "reselect" library offers memoized selectors, see below...
    // todo: clean - permalink is used as id
    //postIds: state.posts.reduce((acc, post) => {
    //  acc[post.permalink] = post.id;
    //  return acc;
    //}, {})
  };
}

/*
function getPostIds(posts) {
  return posts.reduce((acc, post) => {
    acc[post.permalink] = post.id;
    return acc;
  }, {})
}

let postsSelector = reselect.createSelector([(state) => state.posts], (posts) => {
  return {
    posts: posts,
    postIds: getPostIds(posts)
  };
});

 */

export default connect(select)(PostContainer);
