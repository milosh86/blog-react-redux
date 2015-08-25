import './PostList.css';
import Post from '../Post/Post.js';
import React, {Component} from 'react';

class PostList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let posts = this.props.posts.map(post => <Post {...post}/>);
    return (
      <div className="blog-postlist">
        {posts}
      </div>
    );
  }
}

PostList.displayName = 'Post List';
PostList.propTypes = {
  posts: React.PropTypes.array.isRequired
};
PostList.defaultProps = {
  posts: [{}, {title: 'Hello'}, {}]
};

export default PostList;
