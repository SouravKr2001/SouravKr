import "./AboutContent.css";
import img1 from "../assets/wallpaper.jpg";
import React from "react";
import { Link } from "react-router-dom";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who am I?</h1>
        <p>I am an enthusiastic computer science
          undergraduate with a strong passion for programming and design.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img1} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={img1} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
