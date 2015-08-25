import './Profile.css';
import React, {Component} from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="blog-profile">
         //add profile picture optionally
        <div className="blog-profile--name">{this.props.name}</div>
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
  name: 'Default Name',
  punchLine: 'Default Developer from Belgrade'
};

export default Profile;
