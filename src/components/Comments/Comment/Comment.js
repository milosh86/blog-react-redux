import './Comment.css';
import React, {Component, PropTypes} from 'react';
import moment from 'moment';

class Comment extends Component {
  static displayName = 'Comment';

  static propTypes = {
    author: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    body: PropTypes.string.isRequired,
    onDeleteComment: PropTypes.func.isRequired
  };

  render() {
    return (
      <div className="blog-comment">
        <div className="blog-comment--header">
          <div className="comment-header--author">{this.props.author}</div>
          <div className="comment-header--date">{moment(this.props.date).fromNow()}</div>
        </div>
        <div className="blog-comment--body">
          <div>Status: {this.props.status}</div>
          <div onClick={() => this.props.onDeleteComment({author: this.props.author, body: this.props.body})}>Delete</div>
          {this.props.body}
        </div>
      </div>
    );
  }
}

export default Comment;