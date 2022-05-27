import React from 'react';
import Desc from '../../services/elements/Desc';
const pythoncontent = [
  {
    id: 1,
    desc: "Python is a high-level object oriented and procedural language. it is one of the easiest and the most reliable languages for scripting codes.",
  },
  {
    id: 2,
    desc: "Python is feature loaded with advantages of code portability, making code migration to other os easier as you transfer and run your codes. that means, coding can be done in one os and easily be transferred to the other os without any issue in the code.",
  },
  {
    id: 3,
    desc: "Being one of the oldest developmental languages, python comes with an extensive library that makes it convenient for coders and developers and can be used for free. it has predefined classes that can be inherited and used for easy and quick development. Python is an open source language that gives it an added advantage.",
  },
  {
    id: 4,
    desc: "Python being a rich programming language comes bundled with the advantage of importing and integration with other languages that means coders can code in languages such as javascript, node js and ruby on rails, these codes can be easily integrated with python and made use of.",
  },
  {
    id: 5,
    desc: "Its application ranges from as simple as website development to web scraping, gaming, language development, software development and even artificial intelligence and machine learning integration.",
  },
];
const pythonoutercontent = [
  {
    id: 1,
    desc: "At tecblic, we develop python integration with erp development, software development, machine learning, and deep learning making it convenient and secure for clients as it is one of the most widely used languages. we have the competence to integrate python with chatbots to instant messaging platforms, api creation and even automate certain tasks, e.g., initiating automated backup to servers at a given time of the day.",
  },
  {
    id: 2,
    desc: "Technology giants like dropbox, google, and even netflix too rely on the powerful and secure python language to enhance their user experience and recommend the most relevant and personalised search results.",
  },
  {
    id: 3,
    desc: "Do You Want To Give Your Business A Python Push? Connect With Tecblic And Witness Change.",
  },
];
const newLocal = "/assets/img/python/ai.png";
const AiMlContent = [
  {
    id: 1,
    heading: "AI/ML",
    desc: "Artificial intelligence is the human-like simulation of intelligence. It is trained to take certain defined actions and make predictions based on previously categorized data.",
    img: newLocal,
  },
];
const djangoContent = [
  {
    id: 1,
    heading: "Django",
    desc: "Django is a high-level & popular python programming framework that has an active and thriving community of developers. it is simple yet powerful and highly scalable.",
    img: "/assets/img/python/RPA.png",
  },
];
const RpaContent = [
  {
    id: 1,
    heading: "RPA",
    desc: "Today, automation is taking charge of the industries globally. It may, at first, seem like jobs of millions are in danger but fortunately it is the other way round.",
    img: "/assets/img/python/RPA.png",
  },
];
const PythonContent = () => {
  return (
    <div className=" text-zinc-500 body-font container mx-auto  px-5 py-10">
      <div className=" ">
        <h2 className="max-w-4xl xl:mb-8 font-sans xl:text-4xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-3xl sm:leading-none">
          OPTING FOR PYTHON IS
          LEAP OF EXPANSIONS.
        </h2>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:flex-grow  md:w-full lg:pr-10 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          {pythoncontent.map((item) => (
            <Desc key={item.id} desc={item.desc} />
          ))}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full">
          <img
            className="object-cover object-center rounded"
            alt="Ai"
            src="/assets/img/python/python.png"
          />
        </div>
      </div>
      {pythonoutercontent.map((item) => (
        <Desc key={item.id} desc={item.desc} />
      ))}
      <h2 className="text-2xl text-black font-bold">
        Do you want to give your business a python push? connect with tecblic
        and witness change.
      </h2>
      <div className=" flex md:flex-row flex-col items-center py-5">
        {AiMlContent.map((item) => (
          <>
            <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-full lg:pr-20 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 ">
              <h2 className="text-2xl text-black font-normal">
                {item.heading}
              </h2>
              <Desc key={item.id} desc={item.desc} desc2={item.desc} />
              <Desc desc="Artificial intelligence or ai comprises of machine learning (ml) and deep learning (dl) sciences. ML happens when machines or bots starts to gather and garner insights from the data provided by the user in form of statistical algorithms and improve the user-experience without being explicitly programmed." />
            </div>
            <div className="lg:max-w-sm lg:w-full md:w-full w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="Ai"
                src={item.img}
              />
            </div>
          </>
        ))}
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:max-w-sm lg:w-full md:w-full w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Ai"
            src="/assets/img/python/django.png"
          />
        </div>
        <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-full lg:pl-10 md:pl-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          <h2 className="text-2xl text-black font-normal">Django</h2>
         
          <Desc desc="Django is free & open source making it one of the most apt for large scale development." />
          <Desc desc="It is one of the widely popular frameworks among the developers following its reusability and extensive libraries. Many popular platforms including national geographic & instagram too function and trust Django. its traffic management efficiencies make it a comprehensive platform to work on." />
        </div>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        {RpaContent.map((item) => (
          <>
            <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-full lg:pr-10 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0">
              <h2 className="text-2xl text-black font-normal">
                {item.heading}
              </h2>
              <Desc key={item.id} desc={item.desc} desc2={item.desc} />
              <Desc desc="Automation is directly touching lives of billions making them more efficient and productive at work by increasing focus on more vital and result-driven actions fuelling growth of the organization. Automation is reducing the no. of petty and repetitive tasks at hands with individuals thus increasing the overall efficiency and reducing the total time consumption in performing one task." />
            </div>
            <div className="lg:max-w-sm lg:w-full md:w-full w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="RPA"
                src={item.img}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default PythonContent