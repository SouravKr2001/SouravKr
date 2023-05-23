import React from "react";
import "./Skills.css";
import NavBar from "../NavBar";
import HeroImg2 from "../HeroImg2";
import Footer from "../Footer";

function Skills() {
  return (
    <div className="myskills">
      <NavBar />
      <HeroImg2
        heading="Skills."
        text="Here is my skills to represent my Expertise"
      />
      <div className="bothSkills">
      {/* Professional Skills*/}
        <div className="professional_Skills">
          <div class="skills_head">
            <h2>
              My <span>Professional Skills</span>
            </h2>
          </div>

          <div className="pSkills">
            <div className="profSkills">
              <div className="outer">
                <div className="inner">
                  <div id="number">90%</div>
                </div>
              </div>

              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
              <div className="pSkillsNames">Problem Solving</div>
            </div>

            <div className="profSkills">
              <div className="outer">
                <div className="inner">
                  <div id="number">95%</div>
                </div>
              </div>

              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
              <div className="pSkillsNames">Creativity</div>
            </div>

            <div className="profSkills">
              <div className="outer">
                <div className="inner">
                  <div id="number">95%</div>
                </div>
              </div>

              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
              <div className="pSkillsNames">Communication</div>
            </div>

            <div className="profSkills">
              <div className="outer">
                <div className="inner">
                  <div id="number">90%</div>
                </div>
              </div>

              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
              <div className="pSkillsNames">Team Work</div>
            </div>

            <div className="profSkills">
              <div className="outer">
                <div className="inner">
                  <div id="number">95%</div>
                </div>
              </div>

              <svg
                className="svg"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                width="160px"
                height="160px"
              >
                <defs>
                  <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#e91e63" />
                    <stop offset="100%" stop-color="#673ab7" />
                  </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" stroke-linecap="round" />
              </svg>
              <div className="pSkillsNames">Time Management</div>
            </div>

            {/* <script>      
        let number = document.getElementById("number");
        let counter = 0;

        setInterval(() => {
          if (counter == 65) {
            clearInterval();
          } else {
          counter += 1;
          number.innerHTML = counter + "%";
          }
        }, 20);
        </script> */}
          </div>
        </div>
        {/*  */}
        <div class="skills_section">
          <div class="skills_head">
            <h2>
              My <span>Technical Skills</span>
            </h2>
          </div>

          <div class="skills_main">
            <div class="skill_bar">
              <div class="info">
                <p>HTML</p>
                <p>90%</p>
              </div>
              <div class="bar">
                <span class="html"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>CSS</p>
                <p>85%</p>
              </div>
              <div class="bar">
                <span class="css"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>SASS</p>
                <p>80%</p>
              </div>
              <div class="bar">
                <span class="sass"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Java Script</p>
                <p>80%</p>
              </div>
              <div class="bar">
                <span class="js"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>React js</p>
                <p>75%</p>
              </div>
              <div class="bar">
                <span class="react"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Node js</p>
                <p>70%</p>
              </div>
              <div class="bar">
                <span class="node"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Express js</p>
                <p>65%</p>
              </div>
              <div class="bar">
                <span class="express"></span>
              </div>
            </div>
            <div class="skill_bar">
              <div class="info">
                <p>Mongo DB</p>
                <p>60%</p>
              </div>
              <div class="bar">
                <span class="mongo"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Skills;
