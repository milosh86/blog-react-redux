import './Temp.css';
import React, {Component} from 'react';

class Temp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

    );
  }
}

Temp.displayName = 'Temp';
Temp.propTypes = {
  tmp: React.PropTypes.string.isRequired
};
Temp.defaultProps = {
  tmp: 'tmp'
};

export default Temp;
