import './Comment.css';
import React, {Component} from 'react';
import moment from 'moment';

class Comment extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blog-comment">
        <div className="blog-comment--header">
          <div className="comment-header--user">{this.props.user}</div>
          <div className="comment-header--date">{moment(this.props.date).fromNow()}</div>
        </div>
        <div className="blog-comment--body">{this.props.body}</div>
      </div>
    );
  }
}

Comment.displayName = 'Comment';
Comment.propTypes = {
  user: React.PropTypes.string.isRequired,
  date: React.PropTypes.instanceOf(Date).isRequired,
  body: React.PropTypes.string.isRequired
};
Comment.defaultProps = {
  user: 'Some user',
  date: new Date,
  body: 'Some random comment'
};

export default Comment;