import React, { Component } from "react";
import "../../styles/Test/Output.scss";
import bsCustomFileInput from 'bs-custom-file-input';
import img1 from "../../assets/1.png";

class Output extends Component {
    componentDidMount() {
        bsCustomFileInput.init()
      }
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="div1 z-depth-3">
           <img className="imageOutput" src={img1} alt=""/>
           <img className="imageOutput" src={img1} alt=""/>
           <img className="imageOutput" src={img1} alt=""/>
           <img className="imageOutput" src={img1} alt=""/>
           <img className="imageOutput" src={img1} alt=""/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Output;

