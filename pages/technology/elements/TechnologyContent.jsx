import React from 'react'
import Heading from '../../../components/Heading';
import TextCard from '../../../components/TextCard';
import Link from 'next/link';
const technology = [
  {
    id: 1,
    href: "/technology/Python",
    heading: "Python",
    desc: "Python is a high-level object oriented and procedural language. It is one of the easiest and the most reliable languages for scripting codes. Python is feature loaded with advantages of code portability.",
  },
  {
    id: 2,
    href: "#",
    heading: "Django",
    desc: "Django is a high-level & popular python programming framework that has an active and thriving community of developers. it is simple yet powerful and highly scalable.",
  },
  {
    id: 3,
    href: "/technology/Ai",
    heading: "AI",
    desc: "Artificial intelligence is the human-like simulation of intelligence. it is trained to take certain defined actions and make predictions based on previously categorized data. AI comprises of ML and DL sciences.",
  },
  {
    id: 4,
    href: "#",
    heading: "Flutter",
    desc: "Flutter- crafted by google, flutter is an open-source ui software development kit based on dart programming language. it is one of the most popular cross-platform application development toolkit.",
  },
  {
    id: 5,
    href: "#",
    heading: "Golang",
    desc: "Golang or popularly knowns as go is one of the most dynamic programming language that gained popularity ever since it was made publicly available in the year 2012.",
  },
  {
    id: 6,
    href: "/technology/Rpa",
    heading: "RPA",
    desc: "Today, automation is taking charge of the industries globally. it may, at first, seem like jobs of millions are in danger but fortunately it is the other way round. Though, as compared to other programming languages, go libraries are",
  },
  {
    id: 7,
    href: "#",
    heading: "React-Js",
    desc: "Creating amazing frontend user interface based on java script library comes handy when you choose react. it is free and open-source. reliability is easy as it is managed by tech giant meta and an open-source",
  },
];

const TechnologyContent = () => {
  return (
    <div className="container xl:py-10 md:py-10 lg:py-7 sm:py-10 mx-auto my-5">
      <Heading heading="Our Work Technology" />
      <div className="grid sm:grid-cols-2 xl:grid-cols-3">
        {technology.map((item) => (
           <Link key={item.id} href={item.href}>
              <a className="cursor-pointer">
                    <TextCard
                    heading={item.heading}
                    desc={item.desc}
                  />
              </a>
        </Link>  
        ))}
      </div>
    </div>
  );
}

export default TechnologyContent;
