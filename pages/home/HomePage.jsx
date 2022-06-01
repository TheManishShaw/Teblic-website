import React from 'react'
import Hero from '../../components/Hero';
import Subscribe from '../../components/Subscribe';
import Tools from '../../components/Tools';
import Blogs from '../blogs/Blogs';
import About from './elements/About';
import Features from './elements/Features';
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Head from 'next/dist/shared/lib/head';
import ContactWidget from '../contact/ContactWidget';
const Home = () => {
  return (
    <>
      <Head>
        <title>Home - Tecblic</title>
      </Head>
      <Hero
        classs="w-full h-screen bg-home bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        priority
        heading="Research. Innovate."
        heading1="Delight. Sustain."
      />
      <Features />
      <About />
      <Blogs />
      <Tools />
      <Subscribe />

      
      <ContactWidget heading="Contact Us" />
    </>
  );
}

export default Home