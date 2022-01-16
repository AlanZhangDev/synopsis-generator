import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Info from './components/Info';
import Form from './components/Form';
import DisplayTool from './components/index';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    document.title="Book x Book";
    return(
    <div className="body">
      <Navbar/>
      <Header/>
      <Info/>
      <Form/>
    </div>
    );
  }
}

export default App;