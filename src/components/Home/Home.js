import './Home.css';
import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {

  static displayName = 'Home';

  static propTypes = {
    tmp: React.PropTypes.string.isRequired
  };


  render() {
    return (
      <div>
        <div className="aboutme">
          <div className="pic">Profile picture</div>
          <div className="intro">Couple of sentences about me</div>
          <div className="tech-list">List of technologies</div>
          <div className="contacts">Contacts</div>
        </div>
      </div>
    );
  }
}


export default Home;
