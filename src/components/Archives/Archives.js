import './Archives.css';
import moment from 'moment';
import Filter from '../Filter/Filter.js'
import React, {Component, PropTypes} from 'react';

class Archives extends Component {

  static displayName = 'Archives';

  static propTypes = {
    posts: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onItemClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: 'Archives'
  };

  _generateArchItems(posts) {
    let itemsMap = {};
    posts.forEach(post => {
      itemsMap[moment(post.date).format('MMMM YYYY')] = true;
    });

    return Object.keys(itemsMap);
  }

  render() {
    let items = this._generateArchItems(this.props.posts);

    // add profile picture optionally
    return (
      <Filter
        title={this.props.title}
        items={items}
        onItemClick={this.props.onItemClick} />
    );
  }
}

export default Archives;
