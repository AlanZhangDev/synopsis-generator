import './Header.css';

import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <div className="background image">
        <div className="title-store">
            <h1 className="title">Book x Book</h1>
            <h2 className="subtitle">The Book Synopsis Generator</h2>
        </div>
    </div>
    );
  }
}

export default Header;