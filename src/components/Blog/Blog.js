import './Blog.css';

import React, {Component, PropTypes} from 'react';
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
    let sortedTags = _.uniq(this.props.posts.reduce(
      (acc, curr) => acc.concat(curr.tags),
      []
      ))
      .sort();

    return ['all'].concat(sortedTags);
  }

  static onArchiveItemClick(item) {
    history.pushState(null, `/archive/${item.replace(' ', '-')}`);
  }

  static onCategoryItemClick(item) {
    history.pushState(null, `/tag/${item}`);
  }

  render() {
    let tags = this._extractTags();

    return (
      <div className="blog">
        <div className="blog-left-side">
          {this.props.children || 'Blog Application'} {/*for routing*/}
        </div>
        <div className="blog-right-side">
          <Profile {...this.props.profile}/>

          <Archives
            title={this.props.archiveTitle}
            onItemClick={Blog.onArchiveItemClick}
            posts={this.props.posts} />

          <Categories
            title={this.props.categoriesTitle}
            onItemClick={Blog.onCategoryItemClick}
            tags={tags} />
        </div>
      </div>
    );
  }
}

export default Blog;
