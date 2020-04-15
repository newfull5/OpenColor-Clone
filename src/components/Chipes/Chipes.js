import React, { Component } from 'react';
import Gray from './AllColors/Gray.js';

class Chipes extends Component {
  render() {
    return (
      <div>
        <Gray 
        colorName="Gray" 
        foxColor0={{ backgroundColor: "#f8f9fa" }} 
        foxColor1={{ backgroundColor: "#f1f3f5" }}
        foxColor2={{ backgroundColor: "#e9ecef" }}
        foxColor3={{ backgroundColor: "#dee2e6" }}
        foxColor4={{ backgroundColor: "#ced4da" }}
        foxColor5={{ backgroundColor: "#adb5bd" }}
        foxColor6={{ backgroundColor: "#868e96" }}
        foxColor7={{ backgroundColor: "#495057" }}
        foxColor8={{ backgroundColor: "#343a40" }}
        foxColor9={{ backgroundColor: "#212529" }}
        foxName0="GRAY 0"
        foxName1="GRAY 1"
        foxName2="GRAY 2"
        foxName3="GRAY 3"
        foxName4="GRAY 4"
        foxName5="GRAY 5"
        foxName6="GRAY 6"
        foxName7="GRAY 7"
        foxName8="GRAY 8"
        foxName9="GRAY 9"
        foxSharp0="#f8f9fa"
        foxSharp1="#f1f3f5"
        foxSharp2="#e9ecef"
        foxSharp3="#dee2e6"
        foxSharp4="#ced4da"
        foxSharp5="#adb5bd"
        foxSharp6="#868e96"
        foxSharp7="#495057"
        foxSharp8="#343a40"
        foxSharp9="#212529"
        />
      </div>
    );
  }
}

export default Chipes;