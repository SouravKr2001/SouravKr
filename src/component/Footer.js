import "./Footer.css";
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import {
  FaMailBulk,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Telco Colony, Jamshedpur</p>
              <p>Jharkhand-831004</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9234948917
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              souravkumar2001jsr@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>
            To be a part of an organization where I can show case my skills and
            can fully utilize it and make a significant contribution to the
            success of the employer and at the same time my individual growth.
          </p>
          <div className="social">
            <a
              href="https://www.linkedin.com/in/sourav-kumar-0165281b4/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                className="fa_icon"
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://github.com/SouravKr2001"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                className="fa_icon"
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://instagram.com/_.nikhil_._sourav_kumar._?igshid=ZGUzMzM3NWJiOQ=="
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                className="fa_icon"
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>

            <a
              href="https://www.linkedin.com/in/sourav-kumar-0165281b4/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook
                className="fa_icon"
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
