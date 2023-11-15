import React from 'react'
import Footer from '../component/Footer';
import HeroImg2 from '../component/HeroImg2';
import NavBar from "../component/NavBar";

const Contact = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg2 heading="CONTACT." text="Lets have a chat" backgroundImage="https://www.callbell.eu/wp-content/uploads/2021/01/SaaS-Call-Center-Software-featured.png"/>
      <Footer/>
    </div>
  )
}

export default Contact
