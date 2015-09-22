if (process.env.__BROWSER__) {
  import './Categories.css';
}
import React, {Component, PropTypes} from 'react';
import Filter from '../Filter/Filter.js';

class Categories extends Component {

  static displayName = 'Categories';

  static propTypes = {
    tags: React.PropTypes.array.isRequired,
    title: React.PropTypes.string.isRequired,
    onItemClick: React.PropTypes.func.isRequired
  };

  static defaultProps = {
    title: 'Categories',
  };

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

export default Categories;
