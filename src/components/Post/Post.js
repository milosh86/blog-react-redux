import './Post.css';
import Comments from '../Comments/Comments.js';
import React, {Component, PropTypes} from 'react';
import moment from 'moment';

class Post extends Component {

  static displayName = 'Post main page';

  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(React.PropTypes.string).isRequired,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        date: PropTypes.instanceOf(Date),
        author: PropTypes.string,
        body: PropTypes.string
      }).isRequired
    ),
    onPostClick: PropTypes.func.isRequired,
    onNewComment: PropTypes.func.isRequired,
    onDeleteComment: PropTypes.func.isRequired,
    short: PropTypes.bool.isRequired
  };

  static onPostClick(history, perma) {
    history.pushState(null, `/blog/post/${perma}`);
  }

  render() {
    let footer = null;
    let body = this.props.body;

    if (this.props.short) {
      body = body.substr(0, 200);
    } else {
      footer =
        <div className="blog-post--comments">
          <Comments
            comments={this.props.comments}
            onNewComment={this.props.onNewComment}
            onDeleteComment={this.props.onDeleteComment}/>
        </div>;
    }

    return (
      <div className="blog-post">
        <div className="blog-post--header">
          <div className="blog-post--date">{moment(this.props.date).format('LLLL')}</div>
          <div className="blog-post--numofcomments">Comments({this.props.comments.length})</div>
        </div>
        <hr />
        <div className="blog-post--title" onClick={() => this.props.onPostClick(this.props.permalink)}>{this.props.title}</div>
        <div className="blog-post--body">
          <pre>
            {body}
          </pre>
        </div>
        {footer}
      </div>
    );
  }
}

export default Post;
