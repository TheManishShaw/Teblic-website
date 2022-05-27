import React from 'react'
import Desc from '../elements/Desc';

const BusinessIntelligense = () => {
  return (
    <div className=" text-zinc-500 body-font container mx-auto  px-5 py-10 mb-10">
      <div className=" ">
        <h2 className="max-w-4xl mb-14 font-sans xl:text-4xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-2xl sm:leading-none">
          ACCELERATE DECISION MAKING WITH BUSINESS INTELLIGENCE
        </h2>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:max-w-lg lg:w-full md:w-full">
          <img
            className="object-cover object-center rounded"
            alt="Odoo"
            src="/assets/img/web/web.png"
          />
        </div>
        <div className="lg:flex-grow  md:w-full lg:pl-14 md:pl-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          <p className="mb-5 leading-relaxed md:text-lg">
            Business intelligence is the umbrella term referring to data silo,
            data warehousing, data mining, interpretation and visualization
            using real-time report generation mechanism assisting in taking
            informed business-accelerating decisions.
          </p>
          <p className="mb-5 leading-relaxed md:text-lg">
            BI minuses traditional data storing and report crafting processes by
            generating desired reports in real-time, accurate and actionable
            data formats. As a report is sought from bi, it interacts with erp
            and displays the result in desired formats.
          </p>
          <p className="mb-5 leading-relaxed md:text-lg">
            Let us understand with an example, imagine you are a business owner,
            and have a large customer base. All data relating to your customers
            is scattered across departments such as sales, accounts, marketing
            etc. It would be a tedious task for you to gather, analyze and sort
            the relevant data and create a fresh database that is meaningful for
            your business-oriented decision-making processes.
          </p>
        </div>
      </div>
      <p className="mb-5 leading-relaxed md:text-lg">
        Now, with bi data is fetched directly from the data silo and the data
        warehouse is updated. Weeds are removed and data is processed for
        standardized formats and displayed with just a blink of an eye. all this
        data is accessible on your dashboard by just one click.
      </p>
      <p className="mb-5 leading-relaxed md:text-lg">
        So how come bi is useful for your business? bi empowers business owners,
        helping them to identify and remove inefficient business processes and
        hidden patterns. it surfaces the strengths and weaknesses of a business
        structure and discovers fresh opportunities.
      </p>
      <p className="mb-5 leading-relaxed md:text-lg">
        Simply put, it provides you with necessary insights to help you boost
        your business and navigate ahead with a plan for the future course of
        action. With tecblic’s innovative approach in bi based on artificial
        intelligence, business development strategies become simple. We have the
        technological expertise and experience that would redefine the way you
        do business.
      </p>
      <Desc
        desc="Our efficient approach in bi leaning on tools like power bi and tableau
        comes with possibilities of voice assistants interacting with your
        business getting you to the most accurate reports defining your
        strategic business planning and improving performance of your team."
      />
      
      <a
        href=""
        className="mb-5 leading-relaxed md:text-lg font-semibold text-blue-600"
      >
        Join Millions Of Techno-Driven Business Owners. Transform And Give Your
        Business The Tech Push.
      </a>
    </div>
  );
}

export default BusinessIntelligense