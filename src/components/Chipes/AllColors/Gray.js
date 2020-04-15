import React from 'react';
import './AllColors.css';
const Gray = (props) => {
  return (
    <div>
      <div style={{ fontSize: "24px", fontWeight: "700", color: "#495057", marginBottom: "35px" }}>{props.colorName}</div>
      <div className="color-wrap">
        <div className="fox" style={this.props.foxColor0} />
        <div className="fox" style={this.props.foxColor1} />
        <div className="fox" style={this.props.foxColor2} />
        <div className="fox" style={this.props.foxColor3} />
        <div className="fox" style={this.props.foxColor4} />
        <div className="fox-name">{this.props.foxName0}</div>
        <div className="fox-name">{this.props.foxName1}</div>
        <div className="fox-name">{this.props.foxName2}</div>
        <div className="fox-name">{this.props.foxName3}</div>
        <div className="fox-name">{this.props.foxName4}</div>
        <div className="fox-sharp">{this.props.foxSharp0}</div>
        <div className="fox-sharp">{this.props.foxSharp1}</div>
        <div className="fox-sharp">{this.props.foxSharp2}</div>
        <div className="fox-sharp">{this.props.foxSharp3}</div>
        <div className="fox-sharp">{this.props.foxSharp4}</div>
      </div>
      <div style={{ height: "40px" }} />
      <div className="color-wrap">
        <div className="fox" style={this.props.foxColor5} />
        <div className="fox" style={this.props.foxColor6} />
        <div className="fox" style={this.props.foxColor7} />
        <div className="fox" style={this.props.foxColor8} />
        <div className="fox" style={this.props.foxColor9} />
        <div className="fox-name">{this.props.foxName5}</div>
        <div className="fox-name">{this.props.foxName6}</div>
        <div className="fox-name">{this.props.foxName7}</div>
        <div className="fox-name">{this.props.foxName8}</div>
        <div className="fox-name">{this.props.foxName9}</div>
        <div className="fox-sharp">{this.props.foxSharp5}</div>
        <div className="fox-sharp">{this.props.foxSharp6}</div>
        <div className="fox-sharp">{this.props.foxSharp7}</div>
        <div className="fox-sharp">{this.props.foxSharp8}</div>
        <div className="fox-sharp">{this.props.foxSharp9}</div>
      </div>
    </div>
  );
};

export default Gray;