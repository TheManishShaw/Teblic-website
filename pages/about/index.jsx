import React from 'react'
import Footer from '../../components/Footer';
import Hero from '../../components/Hero'
import NavBar from '../../components/NavBar'
import Contents from './elements/Contents';
import Founder from './elements/Founder';

const AboutPage = () => {
  return (
    <div>
      <NavBar />
      <Hero
        classs="w-full h-screen bg-about bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        heading="We are Tecblic an"
        heading1=" innovation-driven company"
      />
      <Contents />
      <Footer />
    </div>
  );
}

export default AboutPage
