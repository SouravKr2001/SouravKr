import React from 'react'
import Footer from '../component/Footer';
import HeroImg from '../component/HeroImg';
import NavBar from "../component/NavBar";
import ResumePdf from '../component/ResumePdf';

const Home = () => {
  return (
    <div>
       
        <NavBar/>  
        <HeroImg/>
        <ResumePdf/>
        <Footer/>
          
    </div>
  )
}

export default Home
