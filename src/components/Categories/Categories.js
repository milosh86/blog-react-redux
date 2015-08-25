import './Categories.css';
import React, {Component} from 'react';

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.tags
      .map(tag =>
        <div className="blog-categories--item">
          <a href="#" onClick={() => this.props.onItemClick(tag)}>
            {tag}
          </a>
        </div>);

    // add profile picture optionally
    return (
      <div className="blog-categories">
        <div className="blog-categories--title">{this.props.title}</div>
        <div className="blog-categories--list">{items}</div>
      </div>
    );
  }
}

Categories.displayName = 'Categories';
Categories.propTypes = {
  tags: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  onItemClick: React.PropTypes.func.isRequired
};
Categories.defaultProps = {
  title: 'Categories',
  tags: ['all', 'react', 'JS', 'redux', 'node.js'],
  onItemClick: () => {}
};

export default Categories;
