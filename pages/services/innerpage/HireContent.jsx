import React from 'react'
import Desc from '../elements/Desc';
import ContentLink from '../elements/ContentLink';
const HireContent = () => {
  return (
    <div className=" text-zinc-500 body-font container mx-auto  px-5 py-10 mb-10">
      <div className=" ">
        <h2 className="max-w-4xl xl:mb-14 font-sans xl:text-5xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-3xl sm:leading-none">
          RELIEVE YOURSELF, HIRE
          <br className="xl:displat-block" />
          CONTRACT RESOURCES.
        </h2>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-full lg:pr-14 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          <Desc desc="From building a website from scratch to developing a mobile application, bespoke app or even a software development project, resource hiring has shown increasing potential in every sphere of the it industry. Doubled on popularity in the recent past, contract resources have assisted in giving a much-needed starting push to a no. of emerging businesses by substantially reducing staffing expenses." />
          <Desc desc="It serves more as a bridging element between the end-client & professional. This empowers the companies to choose the right talent to work on their product while also assisting in timely delivery and maintaining transparency in communication." />
          <Desc desc="Hiring resources has also proved to be cost efficient as a company will only be shelling out for the duration the resource is being utilized or as per the terms of the short contract." />
          <Desc desc="It is one of the best means to create a pool of highly-skilled professionals that work dedicatedly on a project. This also minuses the full communication cycle and provides the space for direct and crisp interactions." />
        <Desc desc="In the present corporate setup, it relieves the companies from the tiring task of resource planning. in times of urgency, the hire provider makes it convenient to add or replace the professional with another holding closer professional competence if not exactly the same. Contract hire empowers the client to choose the most suitable candidates of their choice and in the time of need. hire providers may also assist with resources at peak times."/>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Python"
            src="/assets/img/web/hire.png"
          />
        </div>
      </div>

      <Desc desc="While setting up a team would require hardware and functional spaces, resource hiring will greatly benefit the companies as it is generally remote and can be easily managed with limited interaction." />

      <Desc desc="Resource hiring will save big on time & energy, as these professionals will not require to go through training and other on-boarding processes. Since the resources will be a part of the team exclusively on the need basis, it will reduce the tasks of familiarizing with work culture and introduction to company policies etc." />
    </div>
  );
}

export default HireContent