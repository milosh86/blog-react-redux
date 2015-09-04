import './Blog.css';

import React, {Component} from 'react';
import {RouteHandler, Link} from 'react-router';
import {router} from '../../router.js';

import PostList from '../PostList/PostList.js';
import Profile from '../Profile/Profile.js';
import Archives from '../Archives/Archives.js';
import Categories from '../Categories/Categories.js';

import _ from 'lodash';

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = sampleBlogData;
  }

  _extractTags() {
    return _.uniq(this.state.posts.reduce((acc, curr) => acc.concat(curr.tags), []));
  }

  static onArchiveItemClick(item) {
    router.transitionTo('archive', {month: item.replace(' ', '-')});
  }

  static onCategoryItemClick(item) {
    router.transitionTo('tag', {tag: item});

  }

  onNewComment(comment, permalink) {
    let posts = this.state.posts.map(post => {
      if (post.permalink === permalink) {
        post.comments.push(comment);
      }

      return post;
    });
    this.setState({posts: posts});
  }

  onNewPost(post) {
    let newPost = {
      date: post.date,
      title: post.title,
      body: post.body,
      author: 'Milos Dzepina',
      permalink: post.title.replace(/\s/g, '-'),
      tags: post.tags,
      comments: []

    };

    this.setState({
      posts: [...this.state.posts, newPost]
    });

    router.transitionTo('/');
  }

  render() {
    let tags = this._extractTags();

    return (
      <div className="blog">
        <div className="blog-left-side">
          <RouteHandler
            posts={this.state.posts}
            onNewComment={(comment, perma) => this.onNewComment(comment, perma)}
            onNewPost={post => this.onNewPost(post)} />
        </div>
        <div className="blog-right-side">
          <Profile {...this.state.profile}/>
          <Archives
            title={this.props.archiveTitle}
            onItemClick={Blog.onArchiveItemClick}
            posts={this.state.posts} />
          <Categories
            title={this.props.categoriesTitle}
            onItemClick={Blog.onCategoryItemClick}
            tags={tags} />
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
  showFullPosts: false,
  archiveTitle: 'Archives',
  categoriesTitle: 'Categories'
};

let someDate = new Date();
someDate.setMonth(3);

let sampleBlogData = {
  profile: {
    firstName: 'Milos',
    lastName: 'Dzepina',
    punchLine: 'JavaScript Engineer @PSTech'
  },
  posts: [
    {
      id: 1,
      title: 'The post number 1',
      author: 'Milos Dzepina',
      date: new Date(),
      permalink: 'post-1',
      body: 'Hello there this is dummy blog post number 1...',
      tags: ['dummy', 'js', 'react'],
      comments: [
        {
          author: 'User A',
          date: new Date(),
          body: 'Hey, this is stupid!!!'
        },
        {
          author: 'User B',
          date: new Date(),
          body: 'Yes, it sucks...'
        }
      ]

    },
    {
      id: 2,
      title: 'The post number 2',
      author: 'Milos Dzepina',
      date: someDate,
      permalink: 'post-2',
      body: 'Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there' +
      'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
      'this is dummy blog post number 2...Hello *****************Should not see this ***************mmy blog post number 2...Hello there this is dummy blog post number 2...' +
      'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
      'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
      'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
      'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
      'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
      'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...' +
      'this is dummy blog post number 2...Hello there this is dummy blog post number 2...Hello there this is dummy blog post number 2...',
      tags: ['dummy', 'redux', 'react'],
      comments: [
        {
          author: 'User C',
          date: new Date(),
          body: '2: Hey, this is stupid!!!'
        },
        {
          author: 'User D',
          date: new Date(),
          body: '2: Yes, it sucks...'
        }
      ]

    }
  ]
};

export default Blog;
