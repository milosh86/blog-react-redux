import './Blog.css';


import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import history from '../../history.js';

import PostList from '../PostList/PostList.js';
import Profile from '../Profile/Profile.js';
import Archives from '../Archives/Archives.js';
import Categories from '../Categories/Categories.js';

import _ from 'lodash';

class Blog extends Component {

  static displayName = 'Blog';

  static propTypes = {
    archiveTitle: PropTypes.string,
    categoriesTitle: PropTypes.string,

    profile: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      punchLine: PropTypes.string
    }).isRequired,
    posts: PropTypes.array.isRequired
  };

  static defaultProps = {
    archiveTitle: 'Archives',
    categoriesTitle: 'Categories'
  };

  _extractTags() {
    let sortedTags = _.uniq(this.props.posts
      .reduce((acc, curr) =>
        acc.concat(curr.tags),
      []))
      .sort();

    return ['all'].concat(sortedTags);
  }

  onArchiveItemClick = (item) => {
    console.dir(this.props);
    this.props.history.pushState(null, `/blog/archive/${item.replace(' ', '-')}`);
  }

  static onCategoryItemClick(item) {
    history.pushState(null, `/blog/tag/${item}`);
  }

  render() {
    let tags = this._extractTags();

    return (
      <div>
        <div className="blog-nav-header">
          <span className="link"><Link to='/'>MDZ</Link></span>
          <span className="link"><Link to='/blog'>BLOG</Link></span>
          <span className="link"><Link to='/blog/dashboard'>DASHBOARD</Link></span>
        </div>
        <div className="blog">
          <div className="blog-left-side">
            {this.props.children || 'Blog Application'} {/*for routing*/}
          </div>
          <div className="blog-right-side">
            <Profile {...this.props.profile}/>

            <Archives
              title={this.props.archiveTitle}
              onItemClick={this.onArchiveItemClick}
              posts={this.props.posts}/>

            <Categories
              title={this.props.categoriesTitle}
              onItemClick={Blog.onCategoryItemClick}
              tags={tags}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;
