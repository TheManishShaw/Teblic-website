import React from 'react'
import Image from 'next/image';
const OdooContent = () => {
  return (
    <section className="text-zinc-500 body-font container mx-auto  px-5 py-5 ">
      <h1 className="title-font sm:text-4xl mt-5 text-gray-900 xl:text-5xl lg:text-3xl text-3xl  font-semibold uppercase">
        Meet the gamechanger,
        <br className="hidden lg:inline-block" />
        say hi to Odoo
      </h1>
      <div className=" flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left md:mb-0 ">
          <p className="mb-5 leading-relaxed">
            Before garnering understanding on why tecblic, let us understand why
            odoo in the first place. On-demand open object known as odoo is by
            far the most sought after ERP-based business management software
            development framework available in the market in terms of
            efficiency, reliability, and security.
          </p>
          <p className="mb-5 leading-relaxed">
            It has advanced features and high performance ability that is sure
            to cater to all your business needs in one-go. odoo comes with
            bundles of advantages that include module wise micro development,
            phase wise implementation, and more.
          </p>
          <p className="mb-5 leading-relaxed">
            It comes with predefined modules that are customizable as per the
            client’s requirements. the most commonly used modules are sales,
            purchase, accounting, inventory management, and quality control
            among others.
          </p>
          <h4 className="text-2xl font-bold text-black mb-2">
            So why Tecblic if you ask?
          </h4>
          <p className="mb-5 leading-relaxed">
            With over half a decade of experience in odoo development and
            implementation, tecblic’s experience speaks for itself. We have the
            right and skilled people to carry out flawless development. tecblic
            is a known name when it comes to odoo solutions consulting agency.
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Odoo"
            src="/assets/img/odoo/Odoo.png"
          />
        </div>
      </div>
      <div className=" flex md:flex-row flex-col items-left">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Odoo"
            src="/assets/img/odoo/Odoo1.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-10 lg:pr-5 md:pl-16  flex flex-col md:items-start md:text-left  md:mb-0 ">
          <p className="mb-5 leading-relaxed pt-10">
            Depending on the client’s requirements, tecblic can provide odoo
            integration with third party modules such as whatsapp and other
            popular social media integrations, payment gateways, and sms
            gateways integration among others.
          </p>
          <p className="mb-5 leading-relaxed">
            Our experience and acquired expertise has helped us in developing an
            odoo implementation methodology that systematizes your business
            process as per the implementation technique.
          </p>
          <p className="mb-5 leading-relaxed">
            Before we go-live with the implementation, tecblic ensures that you
            are well accustomed with the system flows. We hold on to our clients
            until you learn to swim in the odoo ocean and we thus remain
            available round the clock to serve our clients in the times of
            emergencies.
          </p>

          <p className="mb-5 leading-relaxed">
            We Believe That Change Is Inevitable, And Thus All The Developmental
            Changes May Be Reported To Our Change Management Board And We Will
            Get Back To You With The Best Solutions Available.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OdooContent;