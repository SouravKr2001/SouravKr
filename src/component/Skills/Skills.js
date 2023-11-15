import "./Skills.css";
import NavBar from "../NavBar";
import HeroImg2 from "../HeroImg2";
import Footer from "../Footer";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import JavaIcon from "../../assets/java.png";
import Python from "../../assets/python.svg";
import ReactJs from "../../assets/react.png";
import Mern from "../../assets/mern.png";
import Flutter from "../../assets/flutter.webp";
import Android from "../../assets/android.png";
import Sql from "../../assets/sql.webp";
import Rdbms from "../../assets/rdbms.jpg";
import Figma from "../../assets/figma.png";
import C from "../../assets/C.png";
import Cpp from "../../assets/cpp.png";

const languagesList = [C,JavaIcon, Cpp, Python];
const techList = [ReactJs, Mern, Flutter, Android, Sql, Rdbms, Figma];
const commnList = [
  "Problem Solving",
  "Time Management",
  "Team Work",
  "Communication",
  "Creativity",
];

function SkillCard({ skills, text }) {
  return (
    <Grid className="grid-container" container spacing={5}>
      {skills.map((skill, index) => (
        <Grid className="grid"
          item
          xs={12}
          sm={6}
          md={4}
          lg={3}
          key={index}
          style={{ order: index % 2 === 0 ? 2 : 1 }}
        >
          <Card className="skill_card">
            <div className="img-container">
              {text ? (
                <div className="centered-text">{skill}</div>
              ) : (
                <img src={skill} alt={`Skill ${index}`} />
              )}
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

function Skills() {
  return (
    <div className="myskills">
      <NavBar />
      <HeroImg2
        heading="Skills."
        text="Here is my skills to represent my Expertise"
        backgroundImage="https://res.cloudinary.com/people-matters/image/upload/q_auto,f_auto/v1578435360/1578435358.jpg"
      />

      <div className="skills">
        <div className="skills_title">Programming Languages</div>
        <div className="programming_languages">
          <SkillCard skills={languagesList} />
        </div>

        <div className="skills_title">Technologies</div>
        <div className="programming_languages">
          <SkillCard skills={techList} text={false} />
        </div>

        <div className="skills_title">Professional Skills</div>
        <div className="programming_languages">
          <SkillCard skills={commnList} text={true} />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Skills;

// {/* <div className="bothSkills">
//         {/* Professional Skills*/}
//         <div className="professional_Skills">
//           <div class="skills_head">
//             <h2>
//               My <span>Professional Skills</span>
//             </h2>
//           </div>

//           <div className="pSkills">
//             <div className="profSkills">
//               <div className="outer">
//                 <div className="inner">
//                   <div id="number">90%</div>
//                 </div>
//               </div>

//               <svg
//                 className="svg"
//                 xmlns="http://www.w3.org/2000/svg"
//                 version="1.1"
//                 width="160px"
//                 height="160px"
//               >
//                 <defs>
//                   <linearGradient id="GradientColor">
//                     <stop offset="0%" stop-color="#e91e63" />
//                     <stop offset="100%" stop-color="#673ab7" />
//                   </linearGradient>
//                 </defs>
//                 <circle cx="80" cy="80" r="70" stroke-linecap="round" />
//               </svg>
//               <div className="pSkillsNames">Problem Solving</div>
//             </div>

//             <div className="profSkills">
//               <div className="outer">
//                 <div className="inner">
//                   <div id="number">95%</div>
//                 </div>
//               </div>

//               <svg
//                 className="svg"
//                 xmlns="http://www.w3.org/2000/svg"
//                 version="1.1"
//                 width="160px"
//                 height="160px"
//               >
//                 <defs>
//                   <linearGradient id="GradientColor">
//                     <stop offset="0%" stop-color="#e91e63" />
//                     <stop offset="100%" stop-color="#673ab7" />
//                   </linearGradient>
//                 </defs>
//                 <circle cx="80" cy="80" r="70" stroke-linecap="round" />
//               </svg>
//               <div className="pSkillsNames">Creativity</div>
//             </div>

//             <div className="profSkills">
//               <div className="outer">
//                 <div className="inner">
//                   <div id="number">95%</div>
//                 </div>
//               </div>

//               <svg
//                 className="svg"
//                 xmlns="http://www.w3.org/2000/svg"
//                 version="1.1"
//                 width="160px"
//                 height="160px"
//               >
//                 <defs>
//                   <linearGradient id="GradientColor">
//                     <stop offset="0%" stop-color="#e91e63" />
//                     <stop offset="100%" stop-color="#673ab7" />
//                   </linearGradient>
//                 </defs>
//                 <circle cx="80" cy="80" r="70" stroke-linecap="round" />
//               </svg>
//               <div className="pSkillsNames">Communication</div>
//             </div>

//             <div className="profSkills">
//               <div className="outer">
//                 <div className="inner">
//                   <div id="number">90%</div>
//                 </div>
//               </div>

//               <svg
//                 className="svg"
//                 xmlns="http://www.w3.org/2000/svg"
//                 version="1.1"
//                 width="160px"
//                 height="160px"
//               >
//                 <defs>
//                   <linearGradient id="GradientColor">
//                     <stop offset="0%" stop-color="#e91e63" />
//                     <stop offset="100%" stop-color="#673ab7" />
//                   </linearGradient>
//                 </defs>
//                 <circle cx="80" cy="80" r="70" stroke-linecap="round" />
//               </svg>
//               <div className="pSkillsNames">Team Work</div>
//             </div>

//             <div className="profSkills">
//               <div className="outer">
//                 <div className="inner">
//                   <a id="number">95%</a>
//                 </div>
//               </div>

//               <svg
//                 className="svg"
//                 xmlns="http://www.w3.org/2000/svg"
//                 version="1.1"
//                 width="160px"
//                 height="160px"
//               >
//                 <defs>
//                   <linearGradient id="GradientColor">
//                     <stop offset="0%" stop-color="#e91e63" />
//                     <stop offset="100%" stop-color="#673ab7" />
//                   </linearGradient>
//                 </defs>
//                 <circle cx="80" cy="80" r="70" stroke-linecap="round" />
//               </svg>
//               <div className="pSkillsNames">Time Management</div>
//             </div>

//             {/* <script>
//         let number = document.getElementById("number");
//         let counter = 0;

//         setInterval(() => {
//           if (counter == 65) {
//             clearInterval();
//           } else {
//           counter += 1;
//           number.innerHTML = counter + "%";
//           }
//         }, 20);
//         </script> */}
//           </div>
//         </div>
//         {/* Technical Skills */}
//         <div class="skills_section">
//           <div class="skills_head">
//             <h2>
//               My <span>Technical Skills</span>
//             </h2>
//           </div>

//           <div class="skills_main">
//             <div class="skill_bar">
//               <div class="info">
//                 <p>Java</p>
//                 <p>95%</p>
//               </div>
//               <div class="bar">
//                 <span class="java"></span>
//               </div>
//             </div>

//             <div class="skill_bar">
//               <div class="info">
//                 <p>C</p>
//                 <p>90%</p>
//               </div>
//               <div class="bar">
//                 <span class="c"></span>
//               </div>
//             </div>

//             <div class="skill_bar">
//               <div class="info">
//                 <p>C++</p>
//                 <p>85%</p>
//               </div>
//               <div class="bar">
//                 <span class="cpp"></span>
//               </div>
//             </div>

//             <div class="skill_bar">
//               <div class="info">
//                 <p>Python</p>
//                 <p>60%</p>
//               </div>
//               <div class="bar">
//                 <span class="python"></span>
//               </div>
//             </div>

//             <div class="skill_bar">
//               <div class="info">
//                 <p>React js</p>
//                 <p>75%</p>
//               </div>
//               <div class="bar">
//                 <span class="react"></span>
//               </div>
//             </div>

//             <div class="skill_bar">
//               <div class="info">
//                 <p>Ext js</p>
//                 <p>58%</p>
//               </div>
//               <div class="bar">
//                 <span class="ext"></span>
//               </div>
//             </div>

//             <div class="skill_bar">
//               <div class="info">
//                 <p>DBMS</p>
//                 <p>87%</p>
//               </div>
//               <div class="bar">
//                 <span class="dbms"></span>
//               </div>
//             </div>

//             <div class="skill_bar">
//               <div class="info">
//                 <p>SQL</p>
//                 <p>88%</p>
//               </div>
//               <div class="bar">
//                 <span class="sql"></span>
//               </div>
//             </div>

//             <div class="skill_bar">
//               <div class="info">
//                 <p>Android Development</p>
//                 <p>75%</p>
//               </div>
//               <div class="bar">
//                 <span class="android"></span>
//               </div>
//             </div>

//             <div class="skill_bar">
//               <div class="info">
//                 <p>Mobile Application Development</p>
//                 <p>60%</p>
//               </div>
//               <div class="bar">
//                 <span class="mobileAppnDev"></span>
//               </div>
//             </div>

//             <div class="skill_bar">
//               <div class="info">
//                 <p>UI/UX</p>
//                 <p>90%</p>
//               </div>
//               <div class="bar">
//                 <span class="uiux"></span>
//               </div>
//             </div>
//           </div>
//         </div>
//       // </div> */}
