import React, { Component } from 'react';
import './Chipes.css';

class Chipes extends Component {
  render() {
    return (
      <div className="color-wrap">
        <div className="fox" style = {{backgroundColor : "#f8f9fa"}}/>
        <div className="fox" style = {{backgroundColor : "#f1f3f5"}}/>
        <div className="fox" style = {{backgroundColor : "#e9ecef"}}/>
        <div className="fox" style = {{backgroundColor : "#dee2e6"}}/>
        <div className="fox" style = {{backgroundColor : "#ced4da"}}/>
        <div className="fox-name">GRAY 0</div>
        <div className="fox-name">GRAY 1</div>
        <div className="fox-name">GRAY 2</div>
        <div className="fox-name">GRAY 3</div>
        <div className="fox-name">GRAY 4</div>    
        <div className="fox-sharp">#f8f9fa</div>
        <div className="fox-sharp">#f1f3f5</div>
        <div className="fox-sharp">#e9ecef</div>
        <div className="fox-sharp">#dee2e6</div>
        <div className="fox-sharp">#ced4da</div>
        
      </div>
    );
  }
}

export default Chipes;