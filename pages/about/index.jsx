import Head from "next/head";
import React from "react";
import Hero from "../../components/Hero";
import Contents from "./elements/Contents";

const AboutPage = () => {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <Hero
        classs="w-full h-screen bg-about bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        priority
        heading="We are Tecblic an"
        heading1=" innovation-driven company"
      />
      <Contents />
    </div>
  );
};

export default AboutPage;
