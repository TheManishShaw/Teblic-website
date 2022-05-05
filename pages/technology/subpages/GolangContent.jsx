import React from 'react';
import Desc from '../../services/elements/Desc';
const golangcontent = [
  {
    id: 1,
    desc: "Golang or popularly knowns as go is one of the most dynamic programming language that gained popularity ever since it was made publicly available in the year 2012. Designed by programmers to increase performance and code-simplicity.",
  },
  {
    id: 2,
    desc: "Though, as compared to other programming languages, go libraries are concentrated. However, the good news is, go community is constantly growing and more number of developers are actively contributing",
  },
  {
    id: 3,
    desc: "Go was originally formulated for programs related to networking and infrastructure. Some of the most popular infrastructure tools including kubernets, docker and prometheus were written in Golang.",
  },
  {
    id: 4,
    desc: "One of the key benefits of working with go is its ability to effectively collect garbage giving the programmer more control over the memory reducing latency. Being built for higher performance, it is flexible and can manage multiple processes simultaneously without compromising on the overall effectivity. go is known to produce faster and accurate outcomes.",
  },
  {
    id: 5,
    desc: "Go comes bundled with a unit testing feature that empowers programmers to check the correctness of the codes formulated and allows to maintain the defined flow.",
  },
];

const outercontent = [
  {
    id: 1,
    desc: "Go leans on one size fits all theory, that means, go is a platform independent language. Users are independent in choosing the desired platform for using go based programs making it widely acceptable.",
  },
  {
    id: 2,
    desc: "Some of the most popular and giants in industries rely on the security, readability and efficiency of golang. google, twitch, dailymotion, dropbox and uber are just a few to name.",
  },
  {
    id: 3,
    heading: "One of the Netflix’s team members was quoted as saying",
  },
  {
    id: 4,
    heading: "",
    desc: "“The decision to use go was deliberate, because we needed something that had lower latency than java (where garbage collection pauses are an issue) and is more productive for developers than c, while also handling tens of thousands of client connections. go fits this space well.”",
  },
  {
    id: 5,
    heading: "",
    desc: "In a nutshell, Golang is one among the most comprehensive yet specific programming languages that foundations on security, simplicity yet effective productivity of the overall project.",
  },
];
const GolangContent = () => {
  return (
    <div className=" text-zinc-500 body-font container mx-auto  px-5 py-10">
      <div className=" ">
        <h2 className="max-w-4xl xl:mb-14 font-sans xl:text-5xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-3xl sm:leading-none">
          MAKE GO YOUR GO TO
          <br className="xl:displat-block" />
          LANGUAGE.
        </h2>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Golang"
            src="/assets/img/web/Golange.png"
          />
        </div>
        <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-full lg:pl-14 md:pl-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          {golangcontent.map((item) => (
            <Desc key={item.id} desc={item.desc} />
          ))}
        </div>
      </div>
      {outercontent.map((item) => (
        <>
          <Desc key={item.id} desc={item.desc} />
          <h2 className="text-2xl text-black font-bold">{item.heading}</h2>
        </>
      ))}
    </div>
  );
}

export default GolangContent;