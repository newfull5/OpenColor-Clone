import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import Colors from './components/Colors/Colors.js';

class App extends Component {
  render() {
    return (
      <div className="contents">
        <Navbar />
        <div className="plain-text">
          <div className="openColorIs">
            Open color is an<br/>open-source color scheme
          </div>
          <div className="optimizeFor">
            Optimized for UI like font, background, border, etc.
          </div>
          <div className="version">
            Version 1.6.3<br/>MIT license
          </div>
          <Colors></Colors>
        </div>

      </div>
    );
  }
}

export default App;