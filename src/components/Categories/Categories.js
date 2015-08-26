import './Categories.css';
import React, {Component} from 'react';
import Filter from '../Filter/Filter.js';

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = this.props.tags;

    // add profile picture optionally
    return (
      <Filter
        title={this.props.title}
        items={items}
        onItemClick={this.props.onItemClick} />
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
  tags: ['all', 'react', 'JS', 'redux', 'node.js', 'node.js'],
  onItemClick: () => {}
};

export default Categories;
