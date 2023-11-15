import React from 'react'
import AboutContent from '../component/AboutContent';
import Footer from '../component/Footer';
import HeroImg2 from '../component/HeroImg2';
import NavBar from "../component/NavBar";

const About = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="ABOUT." text="I am developer by interest" backgroundImage="https://wallpapercave.com/wp/wp2071939.jpg"/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
