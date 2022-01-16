import './Navbar.css';

import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className="nav-main">
        <ul className="menu-bar">
            <li id="first-option"><a href="#">Generate!</a></li>
            <li id="second-option"><a href="#">About</a></li>
        </ul>
    </div>
    );
  }
}

export default Navbar;