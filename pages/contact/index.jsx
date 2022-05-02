import React from 'react'
import NavBar from '../../components/NavBar';
import Hero from "../../components/Hero";
import Footer from '../../components/Footer';
import ContactWidget from "./ContactWidget";
import Subscribe from '../../components/Subscribe';
const index = () => {
  return (
    <>
      <NavBar />
      <Hero
        classs="w-full h-screen bg-contact bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        heading="Let's get to know"
        heading1="each other"
      />
      <ContactWidget heading="" />
      <Subscribe />
      <Footer />
    </>
  );
}

export default index