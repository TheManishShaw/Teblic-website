import React from 'react'
import NavBar from '../../components/NavBar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import TechnologyContent from './elements/TechnologyContent';
import VideoBanner from '../../components/VideoBanner';
import Services from '../services/elements/Services';
import Blogs from '../blogs/Blogs';
const index = () => {
  return (
    <div>
      <NavBar />
      <Hero
        classs="w-full h-screen bg-technology bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        heading="Let's get to know 
each other"
      />
      <TechnologyContent/>
      <VideoBanner/>
      <Services/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default index