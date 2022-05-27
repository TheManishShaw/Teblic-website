import React from 'react'
import Desc from '../elements/Desc';
export const ConsultingPartner = () => {
  return (
    <div className=" text-zinc-500 body-font container mx-auto  px-5 py-10 mb-10">
      <div className=" ">
        <h2 className="max-w-4xl xl:mb-14 font-sans xl:text-4xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-3xl sm:leading-none">
          BEST WAY TO START IS
       
          TO CONSULT.
        </h2>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-full lg:pr-14 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          <Desc
            desc=" To start with, experience counts. with over 2 decades of expert
            experience on technology consultation sphere, tecblic has
            successfully managed and excelled in more than 95 percent of
            projects."
          />
          <Desc
            desc=" We provide technical and digital transformation consultation and
            implementation services. We understand businesses as is and work
            tirelessly to bring about meaningful and productive shifts
            strengthening your core business objectives and bringing about
            technological uplift."
          />
          <Desc
            desc=" Tecblic is synonymous with perfection and professionalism when it
            comes to consultation. We are value-driven infused with best in
            industry standard practices fetching the most suitable and
            sustainable technological solutions for our clients."
          />
          <Desc
            desc="We are a flat hierarchy order company extending the freedom to
            innovate and research to every member of our team making it a
            collaborative endeavour. We are passionate for what we do and
            encourage a happy mind attitude creating a transparent and fully
            functional work atmosphere."
          />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Odoo"
            src="/assets/img/consulting/consulting.png"
          />
        </div>
      </div>

      <Desc
        desc="Tecblic ensures utmost attention to minute detailing and prioritizes the
        structure of consulting solutions making it of optimal value to the
        client."
      />

      <Desc
        desc="As we have an illustrious understanding of global businesses and their
        functions which relieves our clients to introduce us to the core of
        their business.at tecblic, quality is ensured as we table the most
        refined, promising and lasting solutions with minimal cost of ownership
        and optimal return on investment."
      />

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
        Connect With Us To Kick-Start Your Digital Transformation Journey.
      </a>
    </div>
  );

}

export default ConsultingPartner;