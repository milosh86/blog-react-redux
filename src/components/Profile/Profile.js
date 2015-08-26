import './Profile.css';
import React, {Component} from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

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

Profile.displayName = 'Profile';
Profile.propTypes = {
  name: React.PropTypes.string.isRequired,
  punchLine: React.PropTypes.string
};
Profile.defaultProps = {
  firstName: 'FirstName',
  lastName: 'LastName',
  punchLine: 'Default Developer from Belgrade'
};

export default Profile;
