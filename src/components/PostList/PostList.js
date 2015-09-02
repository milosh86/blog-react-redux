import './PostList.css';
import Post from '../Post/Post.js';
import React, {Component} from 'react';
import {router} from '../../router.js';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let posts = this.props.posts.map(
        post =>
          <Post
            onPostClick={(perma) => Post.onPostClick(router, perma)}
            key={post.id}
            {...post}
            short={true} />
    );

    return (
      <div className="blog-postlist">
        <div id="blog-postlist--newpost" onClick={this.props.onNewPostClick}>New post</div>
        {posts.length ? posts : 'No posts for given criteria'}
      </div>
    );
  }
}

PostList.displayName = 'Post List';
PostList.propTypes = {
  posts: React.PropTypes.array.isRequired,
  onNewPostClick: React.PropTypes.func.isRequired
};
PostList.defaultProps = {
  posts: [{id:1}, {id: 2, title: 'Hello'}, {id: 3}]
};

export default PostList;
