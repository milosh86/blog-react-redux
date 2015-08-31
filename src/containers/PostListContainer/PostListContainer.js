import PostList from '../../components/PostList/PostList.js';
import React, {Component} from 'react';
import _ from 'lodash';
import moment from 'moment';

class PostListContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let tag = this.props.params.tag;
    let month = this.props.params.month;
    let posts = this.props.posts;
    let filtered;

    if (tag) {
      filtered = posts.filter(post => _.includes(post.tags, tag.trim()));
    } else if (month) {
      filtered = posts.filter(post => moment(post.date).format('MMMM YYYY').replace(' ','-') === month);
    } else {
      filtered = posts;
    }

    return (
      <PostList posts={filtered} />
    );
  }
}

PostListContainer.displayName = 'PostListContainer';
PostListContainer.propTypes = {
  params: React.PropTypes.shape({
    tag: React.PropTypes.string,
    month: React.PropTypes.string
  })
};
PostListContainer.defaultProps = {
  tmp: 'tmp'
};

export default PostListContainer;
