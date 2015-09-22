if (process.env.__BROWSER__) {
import './NewPost.css';
}
import React, {Component} from 'react';

class NewPost extends Component {

  static displayName = 'NewPost';

  static propTypes = {
    onNewPost: React.PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }

  handleNewPost = () => {
    let title = React.findDOMNode(this.refs.title).value;
    let body = React.findDOMNode(this.refs.body).value;
    let tags = React.findDOMNode(this.refs.tags).value;

    if (!title || !body || !tags) {
      this.setState({message: 'All fields must be fulfilled'});
    } else {
      this.setState({message: ''});

      this.props.onNewPost({
        title,
        body,
        tags: tags.split(/\s*,\s*/)
      });
    }
  };

  render() {
    return (
      <div class="blog-newpost">
        <h3>Add New Post</h3>

        <div className="blog-newpost--title">
          <p>Post title:</p>
          <input
            type="text"
            ref="title"
            placeholder="Enter post title" />
        </div>

        <div className="blog-newpost--body">
          <p>New post content:</p>
          <textarea
            type="text"
            rows="30"
            ref="body"
            placeholder="New post" />
        </div>

        <div className="blog-newpost--tags">
          <p>Tags:</p>
          <input
            type="text"
            ref="tags"
            placeholder="Insert tags (keywords separated by comma)" />
        </div>

        <button onClick={this.handleNewPost}>Submit</button>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

export default NewPost;
