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
        <InputBox />
      </div>
    );
  }
}

Comments.displayName = 'Comments';
Comments.propTypes = {
  comments: React.PropTypes.array.isRequired
};
Comments.defaultProps = {
  comments: [{
    user: 'User',
    date: new Date,
    body: 'Hello, this is default comment...this post is great.'
  }, {
    user: 'User1',
    date: new Date,
    body: 'Hello again, this is default comment...this post is great.'
  }
  ]
};

export default Comments;
