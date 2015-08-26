import './Post.css';
import React, {Component} from 'react';
import moment from 'moment';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let footer = this.props.short ? '' : <div>Footer</div>;

    return (
      <div className="blog-post">
        <div className="blog-post--header">
          <div className="blog-post--date">{moment(this.props.date).format('LLLL')}</div>
          <div className="blog-post--comments"><a href="#">Comments({this.props.comments.length})</a></div>
        </div>
        <hr />
        <div className="blog-post--title"><a href='#'>{this.props.title}</a></div>
        <div className="blog-post--body">{this.props.body}</div>
        {footer}
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
    ),
    short: React.PropTypes.bool
};
Post.defaultProps = {
  date: new Date(),
  title: 'Default blog post',
  author: 'M.Dz.',
  body: 'Hello, this is some default post.Hello, this is some default postHello, this is some default postHello, this is some default postHello, this is some default postHello, this is some default postHello, this is some default post..',
  permalink: 'default-post',
  tags: ['default tag'],
  comments: [],
  short: false
};

export default Post;
