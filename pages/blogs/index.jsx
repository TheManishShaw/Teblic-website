import React from 'react'
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import NavBar from '../../components/NavBar';
import Blogs from './Blogs'

const index = () => {
  return (
    <>
      <NavBar />
      <Hero
        classs="w-full h-screen bg-blog bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        heading="Let's get to know "
        heading1="each other"
      />
      <Blogs />

      <Footer />
    </>
  );
}

export default index
