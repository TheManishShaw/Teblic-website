import React from 'react'
import Desc from '../elements/Desc';
import ContentLink from '../elements/ContentLink';
const HireContent = () => {
  return (
    <div className=" text-zinc-500 body-font container mx-auto  px-5 py-10 mb-10">
      <div className=" ">
        <h2 className="max-w-4xl xl:mb-14 font-sans xl:text-5xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-3xl sm:leading-none">
          OPTING FOR PYTHON IS LEAP
          <br className="xl:displat-block" />
          OF EXPANSIONS.
        </h2>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-full lg:pr-14 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          <Desc desc="Python is a high-level object oriented and procedural language. It is one of the easiest and the most reliable languages for scripting codes" />
          <Desc desc="Python is feature loaded with advantages of code portability, making code migration to other os easier as you transfer and run your codes. That means, coding can be done in one os and easily be transferred to the other os without any issue in the code." />
          <Desc desc="Being one of the oldest developmental languages, python comes with an extensive library that makes it convenient for coders and developers and can be used for free. It has predefined classes that can be inherited and used for easy and quick development. Python is an open source language that gives it an added advantage." />
          <Desc desc="Python being a rich programming language comes bundled with the advantage of importing and integration with other languages that means coders can code in languages such as javascript, node js and ruby on rails, these codes can be easily integrated with python and made use of." />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Python"
            src="/assets/img/python/python1.png"
          />
        </div>
      </div>

      <Desc desc="Its application ranges from as simple as website development to web scraping, gaming, language development, software development and even artificial intelligence and machine learning integration." />

      <Desc desc="We are a flat hierarchy order company extending the freedom to innovate and research to every member of our team making it a collaborative endeavour. We are passionate for what we do and encourage a happy mind attitude creating a transparent and fully functional work atmosphere." />

      <Desc
        desc="Our efficient approach in bi leaning on tools like power bi and tableau
        comes with possibilities of voice assistants interacting with your
        business getting you to the most accurate reports defining your
        strategic business planning and improving performance of your team."
      />
      <Desc desc="Tecblic ensures utmost attention to minute detailing and prioritizes the structure of consulting solutions making it of optimal value to the client." />
      <Desc desc="As we have an illustrious understanding of global businesses and their functions which relieves our clients to introduce us to the core of their business.at tecblic, quality is ensured as we table the most refined, promising and lasting solutions with minimal cost of ownership and optimal return on investment." />
      <ContentLink
        href="/home/HomePage"
        text="Connect With Us To Kick-Start Your Digital Transformation Journey."
      />
    </div>
  );
}

export default HireContent