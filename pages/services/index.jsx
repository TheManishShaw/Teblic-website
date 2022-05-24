import React from 'react'
import Head from "next/dist/shared/lib/head";
import Hero from '../../components/Hero';
import Services from './elements/Services';
import VideoBanner from '../../components/VideoBanner';
import Blogs from '../blogs/Blogs';
import Subscribe from '../../components/Subscribe';
const index = () => {
  return (
    <div>
      <Head>
        <title>Services - Tecblic</title>
      </Head>
      <Hero
        classs="w-full h-screen bg-service bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        priority
        heading="Let's get to know"
        heading1="each other"
      />

      <Services />
      <VideoBanner />
      <Blogs />
      <Subscribe />
    </div>
  );
}

export default index;
