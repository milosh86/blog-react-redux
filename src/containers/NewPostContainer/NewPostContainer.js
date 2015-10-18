import NewPost from '../../components/NewPost/NewPost.js';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as postActions from '../../actions/posts.js';
import history from '../../history.js';

class NewPostContainer extends Component {
  static displayName = 'NewPostContainer';

  onNewPost = (post) => {
    post.date = new Date;
    post.permalink =  post.title.replace(/\s/g, '-');
    post.comments = [];
    this.props.dispatch(postActions.createPost(post));
    history.pushState(null, '/blog');
  }

  render() {
    return (
      <NewPost
        onNewPost={this.onNewPost} />
    );
  }
}

function select(state) {
  return {};
}

export default connect(select)(NewPostContainer);
