import React from "react";
import "./Education.css";
import styled from "styled-components";
import NavBar from "../NavBar";
import HeroImg2 from "../HeroImg2";
import Footer from "../Footer";

const Container = styled.div`
  & {
    --dateH: 3rem;
    height: var(--dateH);
    margin-inline: calc(var(--inlineP) * -1);

    text-align: center;

    color: white;
    font-size: 1.25rem;
    font-weight: 700;

    display: grid;
    place-content: center;
    position: relative;

    border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
  }

  &:after {
    content: "";
    position: absolute;
    width: 2rem;
    aspect-ratio: 1;
    background: white;
    border: 0.3rem solid red;
    border-radius: 50%;
    top: 50%;

    transform: translate(50%, -50%);
    right: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }

  &:before {
    content: "";
    width: var(--inlineP);
    aspect-ratio: 1;
    background: var(backgroundColor);
    background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
    position: absolute;
    top: 100%;
    clip-path: polygon(0 0, 100% 0, 0 100%);
    right: 0;
  }

  &:hover:after {
    background: #39ff14;
  }
`;

function Experience() {
  return (
    <div>
      <NavBar />
      <HeroImg2 heading="MY Education." text="I am developer by interest" backgroundImage="https://wallpapers.com/images/featured/education-d4w62mny8rdusxe0.jpg" />
      <div className="myExperience">
        <ul>
          <li>
            <Container
              style={{ backgroundColor: "#FFBF00" }}
              class="degreedate"
            >
              May 2019 – June 2023
            </Container>
            <div class="degreetitle">
              Graduation (B-Tech in Computer Science and Engineering)
            </div>
            <div class="degreeContent">
              GIET University, Gunupur
              <p> - Member of Data Science Club </p>
              <p> - Member of Bitgrit Student Chapter</p>
            </div>
          </li>

          <li>
            <Container
              style={{ backgroundColor: "#40E0D0" }}
              class="degreedate"
            >
              May 2017 – May 2019
            </Container>
            <div class="degreetitle">Higher Secondary School Certificate (Computer Science)</div>
            <div class="degreeContent">
            Valley View School, Jamshedpur  (CBSE)
            </div>
          </li>
          <li>
            <Container
              style={{ backgroundColor: "#CCCCFF" }}
              class="degreedate"
            >
              May 2016 – May 2017
            </Container>
            <div class="degreetitle">Secondary School Certificate</div>
            <div class="degreeContent">
            Kerala Public School, Jamshedpur (CBSE)
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
