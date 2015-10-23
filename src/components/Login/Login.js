import './Login.css';
import React, {Component} from 'react';
import auth from '../../auth.js';

class Login extends Component {

  static displayName = 'Login';

  constructor() {
    super();
    this.state = {invalidInput: false};
  }

  handleSubmit(event) {
    event.preventDefault();

    var username = React.findDOMNode(this.refs.username).value;
    var password = React.findDOMNode(this.refs.password).value;

    auth.login(username, password)
      .then(() => {
        let { location, history } = this.props;

        if (location.state && location.state.nextPathname) {
          history.replaceState(null, location.state.nextPathname);

        } else {
          history.replaceState(null, '/blog');

        }
      })
      .catch(() => {
        this.setState({invalidInput: true});
      });

  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          Username: <br />
          <input type="text" name="username" ref="username"/> <br />
          Password:
          <br />
          <input type="password" name="password" ref="password"/>
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        {this.state.invalidInput && <p>Invalid input!</p>}
      </div>
    );
  }
}

export default Login;
