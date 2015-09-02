import './NewPost.css';
import React, {Component} from 'react';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      tags: ''
    };
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleBodyChange(event) {
    this.setState({
      body: event.target.value
    });
  }

  handleTagsChange(event) {
    this.setState({
      tags: event.target.value
    });
  }

  handleNewPost() {
    let title = this.state.title;
    let body = this.state.body;
    let tags = this.state.tags;

    if (!title || !body || !tags) {
      this.setState({message: 'All fields must be fulfilled'});
    } else {
      this.setState({
        message: '',
        name: '',
        comment: ''
      });

      this.props.onNewPost({
        title,
        body,
        tags: tags.split(/\s*,\s*/),
        date: new Date
      });
    }
  }

  render() {
    return (
      <div class="blog-newpost">
        <h3>Add New Post</h3>
        <div className="blog-newpost--title">
          <p>Post title:</p>
          <input
            type="text"
            value={this.state.title}
            placeholder="Enter post title"
            onChange={event => this.handleTitleChange(event)} />
        </div>
        <div className="blog-newpost--body">
          <p>New post content:</p>
          <textarea
            type="text"
            rows="30"
            value={this.state.body}
            placeholder="New post"
            onChange={event => this.handleBodyChange(event)} />
        </div>

        <div className="blog-newpost--tags">
          <p>Tags:</p>
          <input
            type="text"
            value={this.state.tags}
            placeholder="Insert tags (keywords separated by comma)"
            onChange={event => this.handleTagsChange(event)} />
        </div>

        <button onClick={() => this.handleNewPost()}>Submit</button>
        <div>{this.state.message}</div>
      </div>
    );
  }
}

NewPost.displayName = 'NewPost';
NewPost.propTypes = {
  tmp: React.PropTypes.string.isRequired
};
NewPost.defaultProps = {
  tmp: 'tmp'
};

export default NewPost;
