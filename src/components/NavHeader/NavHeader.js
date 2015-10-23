import './NavHeader.css';
import React, {Component} from 'react';
import {Link} from 'react-router';

class NavHeader {
  constructor(props) {
    super(props);
  }

  render() {
    return (

    );
  }
}

NavHeader.displayName = 'Temp';
NavHeader.propTypes = {
  tmp: React.PropTypes.string.isRequired
};
NavHeader.defaultProps = {
  tmp: 'tmp'
};

export default NavHeader;
