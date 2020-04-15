import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import ColorContainer from './components/Colors/ColorContainer.js';
import Chipes from './components/Chipes/Chipes.js';

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
        <ColorContainer />
        <div style={{height:"70px"}}/>
        <Chipes />
      </div>
    );
  }
}

export default App;