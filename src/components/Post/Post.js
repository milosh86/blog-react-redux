import './Post.css';
import React, {Component} from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blog-post">
        <div className="blog-post--date">{this.props.date.toString()}</div>
        <div className="blog-post--title">{this.props.title}</div>
        <div className="blog-post--body">{this.props.body}</div>
        <div className="blog-post--footer">Number of comments: {this.props.comments.length}</div>
      </div>
    );
  }
}

Post.displayName = 'Post main page';
Post.propTypes = {
    date: React.PropTypes.instanceOf(Date).isRequired,
    title: React.PropTypes.string.isRequired,
    author: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    permalink: React.PropTypes.string.isRequired,
    tags: React.PropTypes.arrayOf(React.PropTypes.string.isRequired),
    comments: React.PropTypes.arrayOf(
      React.PropTypes.shape({
        date: React.PropTypes.string,
        author: React.PropTypes.string,
        body: React.PropTypes.string
      }).isRequired
    )
};
Post.defaultProps = {
  date: new Date(),
  title: 'Default blog post',
  author: 'M.Dz.',
  body: 'Hello, this is some default post...',
  permalink: 'default-post',
  tags: ['default tag'],
  comments: []
};

export default Post;
