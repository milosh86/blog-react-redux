if (process.env.__BROWSER__) {
import './Profile.css';
}
import React, {Component, PropTypes} from 'react';

class Profile extends Component {
  static displayName = 'Profile';

  static propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    punchLine: PropTypes.string.isRequired
  };

  //add profile picture optionally
  render() {
    return (
      <div className="blog-profile">
        <div className="blog-profile--name">
          <div>
            {this.props.firstName.toUpperCase()}
          </div>
          <div>
            {this.props.lastName.toUpperCase()}
          </div>
        </div>
        <div className="blog-profile--punchline">{this.props.punchLine}</div>
      </div>
    );
  }
}

export default Profile;
