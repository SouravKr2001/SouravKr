import "./HeroImg2.css";

import React, { Component } from "react";

class HeroImg2 extends Component {
  
  render() {
    const {backgroundImage } = this.props;
    const style = backgroundImage
  ? {
      backgroundImage: `url(${backgroundImage})`,
      opacity: 0.8,
     
    }
  : {};
  
    return (
      <div className="hero-img" style={style}>
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
export default HeroImg2;
