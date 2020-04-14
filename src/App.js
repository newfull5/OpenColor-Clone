import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import ColorContainer from './components/Colors/ColorContainer.js';

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
        </div>
        <ColorContainer></ColorContainer>
      </div>
    );
  }
}

export default App;