import React from 'react';
import Head from "next/head";
import Hero from '../../components/Hero';
import Blogs from './Blogs'

const index = () => {
  return (
    <>
      <Head>
        <title>Blogs - Tecblic</title>
      </Head>
      <Hero
        classs="w-full h-screen bg-blog bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        priority
        heading="DIVE INTO OUR"
        heading1="TECH-VERSE."
      />
      <Blogs />
    </>
  );
}

export default index;
