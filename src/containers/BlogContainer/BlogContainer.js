import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import Blog from '../../components/Blog/Blog.js';

class BlogContainer extends Component {

  static displayName = 'BlogContainer';

  static propTypes = {
    profile: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      punchLine: PropTypes.string
    }).isRequired,
    posts: PropTypes.array.isRequired
  };

  render() {
    return (
      <Blog {...this.props} />

    );
  }
}

function select(state) {
  return {
    profile: state.profile,
    posts: state.posts
  }
}

export default connect(select)(BlogContainer);

