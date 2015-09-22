if (process.env.__BROWSER__) {
import './PostList.css';
}
import Post from '../Post/Post.js';
import React, {Component} from 'react';
import history from '../../history.js';

class PostList extends Component {
  static displayName = 'Post List';

  static propTypes = {
    posts: React.PropTypes.array.isRequired,
    onNewPostClick: React.PropTypes.func.isRequired
  };

  render() {
    let posts = this.props.posts.map(
        post =>
          <Post
            onPostClick={(perma) => Post.onPostClick(history, perma)}
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

export default PostList;
