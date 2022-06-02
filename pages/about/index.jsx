import Head from "next/head";
import React from "react";
import Hero from "../../components/Hero";
import Contents from "./elements/Contents";
import Testing from "../../components/Testing";

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
      <Testing />
      <div class="container w-100 lg:w-5/5 mx-auto flex flex-col mb-10">
        <div
          v-for="card in cards"
          class="flex flex-col md:flex-row overflow-hidden bg-white rounded-lg mt-4 w-100 mx-2"
        >
          <div class="h-72 w-auto md:w-1/2">
            <img
              class="inset-0 h-full w-full object-cover object-top"
              src="/assets/img/shinoj.png"
            />
          </div>

          <div class="w-full py-4 px-6 text-gray-800 flex flex-col">
            <h3 class="font-semibold text-2xl leading-tight truncate">
              Shinoj Nair
            </h3>
            <h4 className="text-xl mt-1 font-semibold">Founder</h4>
            <p class="mt-1">
              Mr. shinoj nair co-founder of the company, having nearly 15+ years
              of experience in the it industry. He is an eminent individual who
              has a vision of bridging the gap between business requirements and
              the technology. Mr. shinoj nair has been coming from a technology
              background and provides a culture of learning and amazing
              opportunities to individuals to grow. Over the years, he has been
              helping companies go from being smbs to enterprises.
            </p>
          </div>
        </div>
      </div>
      <div class="container w-100 lg:w-5/5 mx-auto flex flex-col mb-10">
        <div
          v-for="card in cards"
          class="flex flex-col md:flex-row overflow-hidden
                                        bg-white rounded-lg   mt-4 w-100 mx-2"
        >
          <div class="w-full py-4 px-6 text-gray-800 flex flex-col">
            <h3 class="font-semibold text-2xl leading-tight truncate">
              Heena Nair
            </h3>
            <h4 className="text-xl mt-1 font-semibold">Founder</h4>
            <p class="mt-1">
              With more than 10 years of experience in software development and
              project management, she collaborates with the teams and ensures
              smooth delivery of the projects. She has a strong creative vision
              with an understanding of business objectives and proven expertise
              in concept development.
            </p>
          </div>
          <div class="h-72 w-auto md:w-1/2">
            <img
              class="inset-0 h-full w-full object-cover object-top"
              src="/assets/img/heena.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
