import React from 'react'
import InnerHeading from '../../services/elements/InnerHeading';
import Desc from '../../services/elements/Desc';

const techcontent = [
  {
    id: 1,
    desc: "Artificial intelligence is the human-like simulation of intelligence. It is trained to take certain defined actions and make predictions based on previously categorized data.",
  },
  {
    id: 2,
    desc: "Artificial intelligence or ai comprises of machine learning (ml) and deep learning (dl) sciences. ML happens when machines or bots starts to gather and garner insights from the data provided by the user in form of statistical algorithms and improve the user-experience without being explicitly programmed.",
  },
  {
    id: 3,
    desc: "Similarly, DL is the process of machine learning from the past data and distinct human interactions developing a unique understanding for itself. It recognizes the present developments and is capable to initiate behavioral modifications based on it. Though DL imitates the potentials of a human cerebrum, it can also be understood as an extension to machine garnering understanding from human behaviors and frequent interactions. a prime example of DL is chauffer-less cars.",
  },
];
const outercontent = [
  {
    id: 1,
    desc: "DL can also be understood as the nerve-center in artificial intelligence ecosystem that processes complex algorithms leaning on neural network architectures.from weather forecast to assistance for unlocking a number of devices, AI is widely used today. We are surrounded by bots that make our lives simple yet efficient.",
  },
  {
    id: 2,
    desc: "At tecblic, we develop deep understanding of issue by gathering data and analyzing client requirements. Data is collected and bots are developed to work in sync with data and requirements.",
  },
  {
    id: 3,
    desc: "Having extensive expertise and experience in development and deployment of ai models, tecblic refines the requirements tabled by the clients and provides a comprehensive solution that meet the desired results.",
  },
  {
    id: 4,
    desc: "Tecblic leans on powerful and all-encompassing python programming language to develop unmatched artificial intelligence solutions. python has extensive libraries that supports and simplifies the overall development. In terms of popularity of libraries, sklearn is the most sought-after library for machine learning while tensorflow hugely assists in effective development of deep learning solutions making the overall development process smoother.",
  },
];
const AiContent = () => {
  return (
    <div className=" text-zinc-500 body-font container mx-auto  px-5 py-10">
      <div className=" ">
        <h2 className="max-w-4xl xl:mb-14 font-sans xl:text-5xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-3xl sm:leading-none">
          WE BUILD BOTS AND
          <br className="xl:displat-block" />
          TRAIN IT.
        </h2>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-full lg:pr-14 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          {techcontent.map((item) => (
            <Desc key={item.id} desc={item.desc} />
          ))}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Ai"
            src="/assets/img/ai/Ai.png"
          />
        </div>
      </div>
      {outercontent.map((item) => (
        <Desc key={item.id} desc={item.desc} />
      ))}
    </div>
  );
}

export default AiContent;