import Post from '../../components/Post/Post.js';
import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as postActions from '../../actions/posts.js';

import history from '../../history.js';

class PostContainer extends Component {
  static displayName = 'PostContainer';

  static propTypes = {
    params: React.PropTypes.shape({
      permalink: React.PropTypes.string
    }),
    posts: React.PropTypes.array.isRequired,
    postIds: React.PropTypes.object.isRequired,
    dispatch: React.PropTypes.func.isRequired
  };

  onNewComment = (comment) => {
    let {postIds, permalink, dispatch} = this.props;
    dispatch(postActions.createComment(comment, postIds[permalink]));
  };

  render() {
    let permalink = this.props.params.permalink;
    let post = this.props.posts.filter(post => post.permalink === permalink);

    return (
       post.length ?
         <Post
           onPostClick={(perma) => Post.onPostClick(history, perma)}
           onNewComment={(comment) => this.props.onNewComment(comment)}
           {...post[0]}/> :
         <div>'Could not find requested post'</div>
    );
  }
}

function select(state) {
  return {
    posts: state.posts,
    postIds: state.posts.reduce((acc, post) => {
      acc[post.permalink] = post.id;
      return acc;
    }, {})
  };
}

export default connect(select)(PostContainer);
