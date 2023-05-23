import React from 'react';
import Footer from '../component/Footer';
import HeroImg2 from '../component/HeroImg2';
import NavBar from "../component/NavBar";
import PricingCard from '../component/PricingCard';
import Work from '../component/Work'

const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
      <Work/>
      <PricingCard/>
      <Footer/>
    </div>
  )
}

export default Project;
