import React, { Component } from 'react';
import Color from './Colors';

const boxcolors = {
  GRAY : "#495057",
  GRAPE : "#ae3ec9",
  BLEU : "#1c7ed6",
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
      <Color Mystyle={{backgroundColor : boxcolors.GRAY, }} name="GRAY"/>
      <Color Mystyle={{backgroundColor : boxcolors.GRAPE, }} hoversytle={{":hover": {color: "White"}}} name="GRAPE"/>
      </div>
    );
  };
}

export default ColorContainer;