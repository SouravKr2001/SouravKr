import "./HeroImg.css";
import IntoImg from "../assets/S1.jpg";
import { Link } from "react-router-dom";

import React from "react";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntoImg} alt="IntoImg" />
      </div>
      <div className="content">
        <h2>Hi, I'm </h2>
        <h1>Sourav Kumar</h1>
        <p>
          Welcome to my portfolio! I am an enthusiastic computer science
          undergraduate with a strong passion for programming and design.
        </p>
        <div>
          <Link to="/project" className="btn">
            Project
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroImg;
