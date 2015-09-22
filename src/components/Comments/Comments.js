import './Comments.css';
import Comment from './Comment/Comment.js';
import InputBox from './InputBox/InputBox.js';
import React, {Component, PropTypes} from 'react';

class Comments extends Component {

  static displayName = 'Comments';

  static propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        date: PropTypes.instanceOf(Date),
        body: PropTypes.string
      })).isRequired,
    onNewComment: React.PropTypes.func.isRequired
  };

  render() {
    let comments = this.props.comments.map(comment => <Comment {...comment} />);

    return (
      <div className="blog-comments">
        {comments}
        <InputBox onNewComment={this.props.onNewComment} />
      </div>
    );
  }
}

export default Comments;
