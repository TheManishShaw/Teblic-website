import React from 'react'
import Hero from '../../components/Hero';
import TechnologyContent from './elements/TechnologyContent';
import VideoBanner from '../../components/VideoBanner';
import Services from '../services/elements/Services';
import Blogs from '../blogs/Blogs';
const index = () => {
  return (
    <div>
      <Hero
        classs="w-full h-screen bg-technology bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        priority
        heading="Let's get to know each other"
      />
      <TechnologyContent />
      <VideoBanner />
      <Services />
      <Blogs />
    </div>
  );
}

export default index;