import './Archives.css';
import moment from 'moment';
import Filter from '../Filter/Filter.js'
import React, {Component} from 'react';

class Archives extends Component {
  constructor(props) {
    super(props);
  }

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

Archives.displayName = 'Archives';
Archives.propTypes = {
  posts: React.PropTypes.array.isRequired,
  title: React.PropTypes.string.isRequired,
  onItemClick: React.PropTypes.func.isRequired
};
Archives.defaultProps = {
  title: 'Archives',
  posts: [{date: new Date().setMonth(9)},{date: new Date},{date: new Date},{date: new Date().setMonth(3)}],
  onItemClick: () => {}
};

export default Archives;
