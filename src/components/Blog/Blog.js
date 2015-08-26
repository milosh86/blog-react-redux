import './Blog.css';
import React, {Component} from 'react';

import PostList from '../PostList/PostList.js';
import Profile from '../Profile/Profile.js';
import Archives from '../Archives/Archives.js';
import Categories from '../Categories/Categories.js';

class Blog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blog">
        <div className="blog-left-side">
          <PostList />
        </div>
        <div className="blog-right-side">
          <Profile />
          <Archives />
          <Categories />
        </div>
      </div>
    );
  }
}

Blog.displayName = 'Blog';
Blog.propTypes = {
  showFullPosts: React.PropTypes.bool

};
Blog.defaultProps = {
  showFullPosts: false
};

export default Blog;
