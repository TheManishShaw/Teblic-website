import React from "react";
import Desc from "../../services/elements/Desc";
const fluttercontent = [
  {
    id: 1,
    desc: "Django is a high-level & popular python programming framework that has an active and thriving community of developers. it is simple yet powerful and highly scalable.",
  },
  {
    id: 2,
    desc: "Django is free & open source making it one of the most apt for large scale development.",
  },
  {
    id: 3,
    heading: "Dependable",
    desc: "It is one of the widely popular frameworks among the developers following its reusability and extensive libraries. Many popular platforms including national geographic & instagram too function and trust Django. Its traffic management efficiencies make it a comprehensive platform to work on.",
  },
  {
    id: 4,
    heading: "Strong community support",
    desc: "Being a developer-friendly framework, Django has an active and growing community of developers. This simplifies the support mechanism of the platform as many of the developers provide round the clock support. Developer can easily reach out to the community and seek guidance and assistance in time of urgencies and the query could be resolved.",
  },
];
const outercontent = [
  {
    id: 1,
    heading: "High-scalability",
    desc: "Django is a component-based framework making it hassle-free & easy to combine. Its component can be easily assembled even at hardware end by means of adding caching servers, database servers, or application servers making the platform highly-scalable and dependable.",
  },
  {
    id: 2,
    heading: "Less codes, more impact",
    desc: "Django codes are written with the dry (don’t repeat yourself) principle. The codes written are maintainable and reusable and remains free from duplications. having said that, django promotes grouping of related functionalities into reusable codes.",
  },
  {
    id: 3,
    heading: "Security",
    desc: "Django provides high-security courtesy to its middleware security component. This component provides shield against an array of middleware attacks thus securing the project providing a multi-layered security.",
  },
  {
    id: 4,
    heading: "Databases",
    desc: "Django works well with all the major databases however; it officially does not provide support for nosql. Developers can seek guidance and support from the growing community and get to solutions. Developers may make modifications in the existing codes that helps in developing fresh codes for projects.",
  },
];
const DjangoContent = () => {
  return (
    <div className=" text-zinc-500 body-font container mx-auto  px-5 py-10">
      <div className=" ">
        <h2 className="max-w-4xl xl:mb-8 font-sans xl:text-4xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-3xl sm:leading-none">
          RELY ON THE EXTENSIVITY
          OF DJANGO.
        </h2>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:flex-grow md:w-full lg:pr-10 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          {fluttercontent.map((item) => (
            <>
              <h2 className="text-2xl text-black font-bold">{item.heading}</h2>
              <Desc key={item.id} desc={item.desc} />
            </>
          ))}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full">
          <img
            className="object-cover object-center rounded"
            alt="Django"
            src="/assets/img/web/Django.png"
          />
        </div>
      </div>
      {outercontent.map((item) => (
        <>
          <h2 className="text-2xl text-black font-bold">{item.heading}</h2>
          <Desc key={item.id} desc={item.desc} />
        </>
      ))}
    </div>
  );
};

export default DjangoContent;
