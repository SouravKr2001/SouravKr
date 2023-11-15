import React from 'react';
import Footer from '../component/Footer';
import HeroImg2 from '../component/HeroImg2';
import NavBar from "../component/NavBar";
import PricingCard from '../component/PricingCard';
import Work from '../component/Work'
import ProjectCard from '../component/ProjectOverview/ProjectCard';

const Project = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="PROJECTS." text="Some of my most recent works" backgroundImage="https://bs-uploads.toptal.io/blackfish-uploads/components/blog_post_page/content/cover_image_file/cover_image/1272495/regular_1708x683_cover-VR-05aaf35cae5fa88bf54a4adc83eee285.png"/>
         
      <ProjectCard/>
      <Footer/>
    </div>
  )
}

export default Project;
