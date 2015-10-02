import './Home.css';
import React, {Component} from 'react';

class Home extends Component {

  static displayName = 'Home';

  static propTypes = {
    tmp: React.PropTypes.string.isRequired
  };


  render() {
    return (

      <div>
        <div className="navigation">
          <span>MDZ</span>
          <span>Posts</span>
        </div>
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
