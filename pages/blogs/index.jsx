import React from 'react';
import Hero from '../../components/Hero';
import Blogs from './Blogs'

const index = () => {
  return (
    <>
      <Hero
        classs="w-full h-screen bg-blog bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        priority
        heading="Let's get to know "
        heading1="each other"
      />
      <Blogs />
    </>
  );
}

export default index
