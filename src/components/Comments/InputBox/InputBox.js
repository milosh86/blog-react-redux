if (process.env.__BROWSER__) {
  import './InputBox.css';
}
import React, {Component, PropTypes} from 'react';

class InputBox extends Component {

  static displayName = 'InputBox';

  static propTypes = {
    onNewComment: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      comment: '',
      message: ''
    };
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  }

  handleCommentChange = (event) => {
    this.setState({comment: event.target.value});
  }

  handleNewComment = () => {
    let name = this.state.name;
    let comment = this.state.comment; //or without state: React.findDOMNode(this.refs.commentField).value;

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
               value={this.state.name}
               placeholder="Enter your name (required)"
               onChange={this.handleNameChange} />
        <br/>
        <br/>
        <textarea type="text"
               rows="10"
               value={this.state.comment}
               placeholder="Enter your comment"
               onChange={this.handleCommentChange} />
        <br/>
        <button onClick={this.handleNewComment}>Submit</button>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default InputBox;
