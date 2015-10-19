import './Dashboard.css';
import React, {Component} from 'react';

class Dashboard extends Component {

  static displayName = 'Dashboard';

  static propTypes = {
    tmp: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    tmp: 'tmp'
  };

  render() {
    return (
      <div>Dashboard page</div>
    );
  }
}

export default Dashboard;