import React from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import HeroImg2 from "../HeroImg2";
import img1 from "../../assets/wallpaper.jpg";
import { Link } from "react-router-dom";
import "./Achievenments.css";
import Hrc from "../../assets/hrcCertificate.jpeg";
import Sharp from "../../assets/Sharp.jpg";
import GIETAchievement2 from "../../assets/GIETAchievement2.jpg";
import GIETAchievement1 from "../../assets/GIETAchievement.JPG";

function AchievenmentsContent({ heading, description, img, img_right }) {
  return (
    <div>
      <div className="achievements">
        {img_right ? (
          <>
            <div className="leftSide">
              <h3><u>{heading}</u></h3>
              <p>{description}</p>
            </div>
            <div className="rightSide">
              <div className="achievement-img-container">
                <div className="achievement-img-stack top">
                  <img src={img} className="img" alt="true" />
                </div>
                <div className="achievement-img-stack bottom">
                  <img src={img} className="img" alt="true" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="rightSide">
              <div className="achievement-img-container">
                <div className="achievement-img-stack top">
                  <img src={img} className="img" alt="true" />
                </div>
                <div className="achievement-img-stack bottom">
                  <img src={img} className="img" alt="true" />
                </div>
              </div>
            </div>
            <div className="leftSide">
            <h3><u>{heading}</u></h3>
              <p>{description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const Achievenments = () => {
  return (
    <div>
      <NavBar />

      <HeroImg2
        heading="MY Achievenments."
        text="‘Obstacles are what you see when you take your eye off the goal.‘ Giving up is not my style. I just want to do something that's worthwhile."
        backgroundImage="https://as2.ftcdn.net/v2/jpg/02/88/08/35/1000_F_288083532_DHIFcIWr8gKDalHxwCUyzkPJIOtYDOIH.jpg"
      />

      <AchievenmentsContent
        heading="Product Intern at Highradius "
        description="Awarded with ''The Star Team Award'' for strengthening my team."
        img={Hrc}
        img_right={true}
      />

      <AchievenmentsContent
        heading="Data Analyst at Lagozon Edutech"
        description="Awarded as the ''Top Performer'' during Data Analyst Internship at Lagozon Edutech. "
        img={img1}
        img_right={false}
      />

      <AchievenmentsContent
        heading="GIET University cultural Fest"
        description="Secured the 2nd spot in ''Android development'' at the university's Cultural Fest "
        img={GIETAchievement1}
        img_right={true}
      />

      <AchievenmentsContent
        heading="Programming in C++"
        description="Rated with (*) of Distinction in ''C++ Programming''    by Sharp Computer Education. "
        img={Sharp}
        img_right={false}
      />

      <Footer />
    </div>
  );
};

export default Achievenments;
