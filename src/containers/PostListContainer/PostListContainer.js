import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import PostList from '../../components/PostList/PostList.js';
import history from '../../history.js';

import * as postActions from '../../actions/posts.js';

import _ from 'lodash';
import moment from 'moment';

class PostListContainer extends Component {

  static displayName = 'PostListContainer';

  static propTypes = {
    params: PropTypes.oneOfType([
      PropTypes.shape({
        tag: PropTypes.string
      }),
      PropTypes.shape({
        month: PropTypes.string
      }),
    ]).isRequired,
    posts: PropTypes.array.isRequired

  };

  render() {
    let tag = this.props.params.tag;
    let month = this.props.params.month;
    let posts = this.props.posts;
    let filtered;

    if (tag) {
      filtered = tag === 'all' ?
        posts :
        posts.filter(post => _.includes(post.tags, tag.trim()));
    } else if (month) {
      filtered = posts.filter(post => moment(post.date).format('MMMM YYYY').replace(' ','-') === month);
    } else {
      filtered = posts;
    }

    // sort from the latest to the oldest - Posts that came from server are in string format
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
      <PostList
        posts={filtered}
        onNewPostClick={() => history.pushState(null, '/newpost/')}/>
    );
  }
}

function select(state) {
  return {
    posts: state.posts
  };
}

export default connect(select)(PostListContainer);
