import './Filter.css';
import moment from 'moment';
import _ from 'lodash';
import React, {Component} from 'react';

class Filter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let items = _.uniq(this.props.items)
      .map(item =>
        <div 
          key={item} 
          className="blog-filter--item" 
          onClick={() => this.props.onItemClick(item)}>
            {item}
        </div>);

    return (
      <div className="blog-filter">
        <div className="blog-filter--title">{this.props.title.toUpperCase()}</div>
        <div className="blog-filter--list">{items}</div>
      </div>
    );
  }
}

Filter.displayName = 'Filter';
Filter.propTypes = {
  items: React.PropTypes.array.isRequired, // must be unique (set like)
  title: React.PropTypes.string.isRequired,
  onItemClick: React.PropTypes.func.isRequired
};
Filter.defaultProps = {
  title: 'Filter',
  items: ['item 1', 'item 2', 'item 3', 'item 3'],
  onItemClick: () => {}
};

export default Filter;
