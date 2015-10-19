import './Login.css';
import React, {Component} from 'react';

class Login extends Component {

  static displayName = 'Login';

  static propTypes = {
    tmp: React.PropTypes.string.isRequired
  };

  static defaultProps = {
    tmp: 'tmp'
  };

  render() {
    return (
      <div>Login page...redirect back to initially requested page</div>
    );
  }
}

export default Login;
