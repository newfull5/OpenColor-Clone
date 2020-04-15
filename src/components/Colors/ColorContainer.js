import React, { Component } from 'react';
import './ColorContainer.css';
import Color from './Colors';

const boxcolors = {
  GRAY : "#495057",
  GRAPE : "#ae3ec9",
  BLUE : "#1c7ed6",
  GREEN : "#37b24d",
  ORANGE : "#f76707",
  RED : "#f03e3e",
  VIOLET : "#7048e8",
  CYAN : "#1098ad",
  LIME : "#74b816",
  PINK : "#d6336c",
  INDIGO : "#4263eb",
  TEAL : "#0ca678",
  YELLOW : "#f59f00"
}

class ColorContainer extends Component {
  
  render(){
    return(
      <div>
      <hr />
        <div>
          <div className = "colorline">
            <Color Mystyle={{backgroundColor : boxcolors.GRAY}} name="GRAY"/>
            <Color Mystyle={{backgroundColor : boxcolors.GRAPE}} name="GRAPE"/>
            <Color Mystyle={{backgroundColor : boxcolors.BLUE}} name="BLUE"/>
            <Color Mystyle={{backgroundColor : boxcolors.GREEN}} name="GREEN"/>
            <Color Mystyle={{backgroundColor : boxcolors.ORANGE}} name="ORANGE"/>
          </div>
          <div className = "colorline">
            <Color Mystyle={{backgroundColor : boxcolors.RED}} name="RED"/>
            <Color Mystyle={{backgroundColor : boxcolors.VIOLET}} name="VIOLET"/>
            <Color Mystyle={{backgroundColor : boxcolors.CYAN}} name="CYAN"/>
            <Color Mystyle={{backgroundColor : boxcolors.LIME}} name="LIME"/>
          </div>
          <div className = "colorline">
            <Color Mystyle={{backgroundColor : boxcolors.PINK}} name="PINK"/>
            <Color Mystyle={{backgroundColor : boxcolors.INDIGO}} name="INDIGO"/>
            <Color Mystyle={{backgroundColor : boxcolors.TEAL}} name="TEAL"/>
            <Color Mystyle={{backgroundColor : boxcolors.YELLOW}} name="YELLOW"/>
          </div>
        </div>
      </div>
    );
  };
}


export default ColorContainer;