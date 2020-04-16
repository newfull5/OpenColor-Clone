import React from 'react';
import './AllColors.css';
const AllColors = (props) => {
  return (
    <div>
      <div style={{ fontSize: "24px", fontWeight: "700", color: "#495057", marginBottom: "35px" }}>{props.colorName}</div>
      <div className="color-wrap">
        <div className="fox" style={props.foxColor0} />
        <div className="fox" style={props.foxColor1} />
        <div className="fox" style={props.foxColor2} />
        <div className="fox" style={props.foxColor3} />
        <div className="fox" style={props.foxColor4} />
        <div className="fox-name">{props.foxName0}</div>
        <div className="fox-name">{props.foxName1}</div>
        <div className="fox-name">{props.foxName2}</div>
        <div className="fox-name">{props.foxName3}</div>
        <div className="fox-name">{props.foxName4}</div>
        <div className="fox-sharp">{props.foxSharp0}</div>
        <div className="fox-sharp">{props.foxSharp1}</div>
        <div className="fox-sharp">{props.foxSharp2}</div>
        <div className="fox-sharp">{props.foxSharp3}</div>
        <div className="fox-sharp">{props.foxSharp4}</div>
      </div>
      <div style={{ height: "40px" }} />
      <div className="color-wrap">
        <div className="fox" style={props.foxColor5} />
        <div className="fox" style={props.foxColor6} />
        <div className="fox" style={props.foxColor7} />
        <div className="fox" style={props.foxColor8} />
        <div className="fox" style={props.foxColor9} />
        <div className="fox-name">{props.foxName5}</div>
        <div className="fox-name">{props.foxName6}</div>
        <div className="fox-name">{props.foxName7}</div>
        <div className="fox-name">{props.foxName8}</div>
        <div className="fox-name">{props.foxName9}</div>
        <div className="fox-sharp">{props.foxSharp5}</div>
        <div className="fox-sharp">{props.foxSharp6}</div>
        <div className="fox-sharp">{props.foxSharp7}</div>
        <div className="fox-sharp">{props.foxSharp8}</div>
        <div className="fox-sharp">{props.foxSharp9}</div>
        <div style={{marginBottom : "90px"}}/>
      </div>
    </div>
  );
};

export default AllColors;