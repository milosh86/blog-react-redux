import './Comments.css';
import Comment from './Comment/Comment.js';
import InputBox from './InputBox/InputBox.js';
import React, {Component} from 'react';

class Comments extends Component {
  constructor(props) {
    super(props);
  }

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

Comments.displayName = 'Comments';
Comments.propTypes = {
  comments: React.PropTypes.array.isRequired,
  onNewComment: React.PropTypes.func.isRequired
};
Comments.defaultProps = {
  comments: [{
    author: 'User',
    date: new Date,
    body: 'Hello, this is default comment...this post is great.'
  }, {
    author: 'User1',
    date: new Date,
    body: 'Hello again, this is default comment...this post is great.'
  }
  ]
};

export default Comments;
