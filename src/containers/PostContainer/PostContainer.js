import Post from '../../components/Post/Post.js';
import React, {Component} from 'react';

import {router} from '../../router.js';

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let permalink = this.props.params.permalink;
    let post = this.props.posts.filter(post => post.permalink === permalink);

    return (
       post.length ? <Post onPostClick={(perma) => Post.onPostClick(router, perma)} {...post[0]}/> : <div>'Could not find requested post'</div>
    );
  }
}

PostContainer.displayName = 'PostContainer';
PostContainer.propTypes = {
  params: React.PropTypes.shape({
    permalink: React.PropTypes.string
  }),
  posts: React.PropTypes.array.isRequired
};
PostContainer.defaultProps = {
};
//{post.length ? <Post ...post[0]/> : 'Requested post not found'}
export default PostContainer;
