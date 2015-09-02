import './InputBox.css';
import React, {Component} from 'react';

class InputBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      comment: '',
      message: ''
    };
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  handleCommentChange(event) {
    this.setState({comment: event.target.value});
  }

  handleNewComment() {
    let name = this.state.name; //React.findDOMNode(this.refs.nameField).value;
    let comment = this.state.comment; //React.findDOMNode(this.refs.commentField).value;

    if (!name || !comment) {
      this.setState({message: 'All fields must be fulfilled'});
    } else {
      this.setState({
        message: '',
        name: '',
        comment: ''
      });

      this.props.onNewComment({
        author: name,
        body: comment,
        date: new Date
      });
    }
  }

  render() {
    return (
      <div className="blog-inputbox">
        <h3>Add comment</h3>
        <input type="text"
               ref="nameField"
               value={this.state.name}
               placeholder="Enter your name (required)"
               onChange={event => this.handleNameChange(event)} />
        <br/>
        <br/>
        <textarea type="text"
               ref="commentField"
               rows="10"
               value={this.state.comment}
               placeholder="Enter your comment"
               onChange={event => this.handleCommentChange(event)} />
        <br/>
        <button onClick={() => this.handleNewComment()}>Submit</button>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

InputBox.displayName = 'InputBox';
InputBox.propTypes = {
  onNewComment: React.PropTypes.func.isRequired
};
InputBox.defaultProps = {
  onNewComment: () => {}
};

export default InputBox;
