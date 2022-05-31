import React from "react";
import Desc from "../../services/elements/Desc";
const golangcontent = [
  {
    id: 1,
    desc: "Creating amazing frontend user interface based on java script library comes handy when you choose React. it is free and open-source. Reliability is easy as it is managed by tech giant meta and an open-source developer community.",
  },
  {
    id: 2,
    desc: "Debuted in the market in may 2013, react enjoys a loyal and growing community of developers that adds to its popularity with each passing day. Below are some the amazing features of React.",
  },
  {
    id: 3,
    heading: "Easy formulation",
    desc: "What do you call quick? when your efforts to code narrows giving more room for added functionalities. Crafting close to flawless web application is easy with React.",
  },
  {
    id: 4,
    heading: "Power-packed performance",
    desc: "Leaning on virtual dom, react assists in faster creation of web applications. In contrast to other apps, react only updates the items that were changed after comparing it from previous state.",
  },
 
];

const outercontent = [
  {
    id: 1,
    heading: "Reusability",
    desc: "Reusable components reduce the overall development time. Components can be understood as the pillars of any application. Usually, a number of components make one app. The reusability boosts the overall functionality of the web application.",
  },
  {
    id: 2,
    heading: "Unidirectional Flow",
    desc: "Okay this may sound too technical but let’s try to decode this. During designing an app developers prefer to safe-store some of the child components in the parent components. Single directional flow makes it easy to debug errors and trace the error-causing elements almost instantly",
  },
  {
    id: 3,
    heading:
      "Leaning on the efficiency of powerful react and our technical experts, tecblic crafts flawless web applications that gels with our client’s business requirements aiding in scoring business goals.",
  },
];
const ReactContent = () => {
  return (
    <div className=" text-zinc-500 body-font container mx-auto  px-5 py-10">
      <div className=" ">
        <h2 className="max-w-4xl xl:mb-8 font-sans xl:text-4xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-3xl sm:leading-none">
          LETS CRAFT INCREDIBLE
          FRONTEND
        </h2>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:flex-grow  md:w-full lg:pr-10 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          {golangcontent.map((item) => (
            <>
              <h2 className="text-2xl text-black font-normal">
                {item.heading}
              </h2>
              <Desc key={item.id} desc={item.desc} />
            </>
          ))}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full">
          <img
            className="object-cover object-center rounded"
            alt="React"
            src="/assets/img/react/React.png"
          />
        </div>
      </div>
      {outercontent.map((item) => (
        <>
          <h2 className="text-2xl text-black font-normal">{item.heading}</h2>
          <Desc key={item.id} desc={item.desc} />
  
        </>
      ))}
    </div>
  );
};

export default ReactContent;
