import React from 'react'
import Heading from '../../../components/Heading';
import TextCard from '../../../components/textCard';
import Link from 'next/link'
import Odoo from '../innerpage/Odoo';
const Services = () => {
  return (
    <div className="container px-5 py-14 mx-auto">
      <Heading heading="Our Services" />
      <div className="grid sm:grid-cols-2 xl:grid-cols-3">
        <Link href={"/services/innerpage/Odoo"}>
          <a className="cursor-pointer">
            <TextCard
              heading="AI/ML"
              desc="Over the last half a decade, Artificial Intelligence has become an integral part of our routine without us even realising it. AI increased our productivity helping us streamline our energies and efforts."
            />
          </a>
        </Link>

        <TextCard
          heading="Business Intelligence"
          desc="Bi is the umbrella term referring to data silo, data warehousing, data mining, interpretation & visualization using real-time report generation mechanism assisting in taking informed business decisions. "
        />
        <TextCard
          heading="Robotic Process Automation"
          desc="Today, automation is taking charge of the industries globally. it may, at first, seem like jobs of millions are in danger but fortunately it is the other way round. automation is directly touching lives of billions."
        />
        <TextCard
          heading="Business Consulting"
          desc="To Start With, Experience Counts. With Over 2 Decades Of Expert Experience On Technology Consultation Sphere, Tecblic Has Successfully Managed And Excelled In More Than 95 Percent Of Projects."
        />
        <TextCard
          heading="Hire Dedicated Resources"
          desc="From building a website from scratch to developing a mobile application, bespoke app or even a software development project, resource hiring has shown increasing potential in every sphere of the IT industry. "
        />
        <TextCard
          heading="Web and PWA development"
          desc="Websites Have Evolved As The Most Reliable Source For Gathering Information In Relation To Any Queries We May Come Across. Just google it & you will definitely come across an official website of that company. "
        />
        <TextCard
          heading="Python"
          desc="Python is a high-level object oriented and procedural language. it is one of the easiest and the most reliable languages for scripting codes. Python is feature loaded with advantages of code portability..."
        />
      </div>
    </div>
  );
}

export default Services