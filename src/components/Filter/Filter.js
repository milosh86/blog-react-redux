if (process.env.__BROWSER__) {
import './Filter.css';
}
import _ from 'lodash';
import React, {Component, PropTypes} from 'react';

class Filter extends Component {

  static displayName = 'Filter';

  static propTypes = {
    items: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onItemClick: PropTypes.func.isRequired
  };

  static defaultProps = {
    title: 'Filter'
  };

  render() {
    let items = _.uniq(this.props.items)
      .map(item =>
        <div
          className="blog-filter--item"
          key={item}
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

export default Filter;
