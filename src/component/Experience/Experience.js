import React from "react";
import NavBar from "../NavBar";
import HeroImg2 from "../HeroImg2";
import Footer from "../Footer";
import "./Experience.css";
import img1 from "../../assets/hrcLogo.png";
import tata from "../../assets/tata.png";
import lagazon from "../../assets/lagozon.png";
import lgm from "../../assets/lgm.jpg";
import tsf from "../../assets/tsf.png";

function Experience() {
  return (
    <div>
      <NavBar />
      <HeroImg2
        heading="Experience."
        text="My years of experience have prepared me to undetake the next challenge."
      />

      <div className="experience">
        {/* HRC Paid*/}
        <a
          href="https://www.linkedin.com/in/sourav-kumar-0165281b4/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="right">
            <div className="img-container">
              <div className="img-stack top">
                <img src={img1} className="img" alt="true" />
              </div>
              <div className="img-stack bottom">
                <img src={img1} className="img" alt="true" />
              </div>
            </div>
            <div className="left">
              <h1>Highradius</h1>
              <p>Product Intern</p>
              <h6>( June, 2022 - June, 2023 )</h6>
            </div>
          </div>
        </a>

          {/* HRC Unpaid */}
          <a
          href="https://www.linkedin.com/in/sourav-kumar-0165281b4/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="right">
            <div className="img-container">
              <div className="img-stack top">
                <img src={img1} className="img" alt="true" />
              </div>
              <div className="img-stack bottom">
                <img src={img1} className="img" alt="true" />
              </div>
            </div>
            <div className="left">
              <h1>Highradius</h1>
              <p>Product Intern</p>
              <h6>( June, 2022 - June, 2023 )</h6>
            </div>
          </div>
        </a>

        {/* lagazon */}
        <a
          href="https://www.linkedin.com/in/sourav-kumar-0165281b4/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="right">
            <div className="img-container">
              <div className="img-stack top">
                <img src={lagazon} className="img" alt="true" />
              </div>
              <div className="img-stack bottom">
                <img src={lagazon} className="img" alt="true" />
              </div>
            </div>
            <div className="left">
              <h1>Lagazon Edutech</h1>
              <p>Data Analyst Intern</p>
              <h6>( May, 2021 - July, 2021 )</h6>
            </div>
          </div>
        </a>

        {/* Tata Motors */}
        <a
          href="https://www.linkedin.com/in/sourav-kumar-0165281b4/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="right">
            <div className="img-container">
              <div className="img-stack top">
                <img src={tata} className="img" alt="true" />
              </div>
              <div className="img-stack bottom">
                <img src={tata} className="img" alt="true" />
              </div>
            </div>
            <div className="left">
              <h1>Tata Motors</h1>
              <p>Intern</p>
              <h6>( June, 2021 - July, 2021 )</h6>
            </div>
          </div>
        </a>

        {/* LetsGrowMore */}
        <a
          href="https://www.linkedin.com/posts/sourav-kumar-0165281b4_connections-letsgrowmore-android-activity-6836253917391785984-rDWs?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noreferrer"
        >
          <div className="right">
            <div className="img-container">
              <div className="img-stack top">
                <img src={lgm} className="img" alt="true" />
              </div>
              <div className="img-stack bottom">
                <img src={lgm} className="img" alt="true" />
              </div>
            </div>
            <div className="left">
              <h1>LetsGrowMore</h1>
              <p>Data Analyst Intern</p>
              <h6>( May, 2021 - July, 2021 )</h6>
            </div>
          </div>
        </a>

        {/* TheSparkFoundation */}
        <a
          href="https://www.linkedin.com/posts/sourav-kumar-0165281b4_task2-gripaugust21-task2-activity-6831651964917555200-izTO?utm_source=share&utm_medium=member_desktop"
          target="_blank"
          rel="noreferrer"
        >
          <div className="right">
            <div className="img-container">
              <div className="img-stack top">
                <img
                  src={tsf}
                  className="img"
                  style={{ "max-height": "130px" }}
                  alt="true"
                />
              </div>
              <div className="img-stack bottom">
                <img
                  src={tsf}
                  className="img"
                  style={{ "max-height": "130px" }}
                  alt="true"
                />
              </div>
            </div>
            <div className="left">
              <h1>TheSparkFoundation</h1>
              <p>Data Analyst Intern</p>
              <h6>( May, 2021 - July, 2021 )</h6>
            </div>
          </div>
        </a>

      </div>

      <Footer />
    </div>
  );
}

export default Experience;
