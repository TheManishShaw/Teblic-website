import React from 'react'
import InnerHeading from '../../services/elements/InnerHeading';
import Desc from '../../services/elements/Desc';

const rpacontent = [
  {
    id: 1,
    desc: "Today, automation is taking charge of the industries globally. it may, at first, seem like jobs of millions are in danger but fortunately it is the other way round.",
  },
  {
    id: 2,
    desc: "Automation is directly touching lives of billions making them more efficient and productive at work by increasing focus on more vital and result-driven actions fuelling growth of the organization. Automation is reducing the no. of petty and repetitive tasks at hands with individuals thus increasing the overall efficiency and reducing the total time consumption in performing one task.",
  },
  {
    id: 3,
    desc: "Put simply, rpa is a process of simplifying and automating tasks that require human interference. rpa with the use of a software with artificial intelligence and machine learning capabilities that is stable to handle high volume repetitive tasks. Sorting and short-listing the relevant profile for hr, maintaining records of transactions and even making calculations are some of the many applications of the RPA system.",
  },
  {
    id: 4,
    desc: "It can also perform guided actions such as auto-filling the regular forms, opening and reading an attachment in the email or as simple as creating a backup from one system to another on a preferred input time.",
  },
  {
    id: 5,
    desc: "RPA Implementation For Small To Large Industries Largely Saves Costs, Increases Productivity And Ensures A Near To Zero Errors. It Comes With Coding Flexibility So That The Programmer Does Not Have To Reinvent The Wheel Every Single Time By Developing Codes From Scratch Every Time He Wants To Interact With The System.",
  },
];
const rpaoutercontent = [
  {
    id: 1,
    desc: "Many times, rpa is misunderstood as artificial intelligence (AI). Just to clarify here, these are two different areas of technologies. while ai predicts the future trends based on past data, RPA fetches and processes the data.",
  },
  {
    id: 2,
    desc: "At Tecblic, we follow the uipath for RPA implementation. Ui path implementation allows the users to automate several aspects of a business. It is capable of reducing labour for tasks like web and pdf automation. our rpa solution is strongly capable of interacting with ERP systems and updating on purchase order or sales quotations etc.",
  },
  {
    id: 3,
    desc: "Our team is composed of project managers, design architects, and developers who work together to develop a closely-knit rpa solution that is aligned to our client’s requirements.",
  },
  {
    id: 4,
    desc: "RPA can be implemented with erp too. It is a myth that organizations need either ERP Or RPA. Both the technologies have their own significance and can be implemented together to increase the efficiency and save a big chunk of cost incurred.",
  },
  {
    id: 4,
    desc: "At Tecblic, we educate our clients on technologies and provide solutions that optimizes their functionalities and minimizes the load on employees by performing mundane tasks easing the process for the organization.",
  },
];
const RpaContent = () => {
  return (
    <div className=" text-zinc-500 body-font container mx-auto  px-5 py-10">
      <div className=" ">
        <h2 className="max-w-4xl xl:mb-14 font-sans xl:text-5xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-3xl sm:leading-none">
          SAVE TIME & EFFORT WITH
          <br className="xl:displat-block" />
          AUTOMATION.
        </h2>
        
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-full lg:pr-20 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          {rpacontent.map((item) => (
            <Desc key={item.id} desc={item.desc} />
          ))}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Ai"
            src="/assets/img/rpa/RPA.png"
          />
        </div>
      </div>
      {rpaoutercontent.map((item) => (
        <Desc key={item.id} desc={item.desc} />
      ))}
      <h2 className="text-2xl text-black font-bold">
        Looking For An Effective RPA Implementation? Your Worries End At
        Tecblic.
      </h2>
    </div>
  );
}

export default RpaContent;