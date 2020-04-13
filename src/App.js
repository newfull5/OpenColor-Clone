import React, { Component } from 'react';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <Navbar>
        <img src='./components/logo.png'></img>
      </Navbar>
    );
  }
}

export default App;