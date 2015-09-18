import NewPost from '../../components/NewPost/NewPost.js';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as postActions from '../../actions/posts.js';
import history from '../../history.js';

let _id = 2;

class NewPostContainer extends Component {
  static displayName = 'NewPostContainer';

  onNewPost = (post) => {
    _id++;
    post.id = _id;
    this.props.dispatch(postActions.createPost(post));
    history.pushState(null, '/');
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
