import React from 'react';
import './Colors.css';


const Colors = (props) => {
  return (
    <div className="color-contain">
      <div className="box" style={props.Mystyle}/>
      <div className='colorName'>{props.name}</div>
    </div>
  );
};

export default Colors;