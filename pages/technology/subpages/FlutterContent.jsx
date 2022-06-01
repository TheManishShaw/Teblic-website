import React from 'react';
import Desc from '../../services/elements/Desc';
const fluttercontent = [
  {
    id: 1,
    desc: "Flutter- crafted by google, flutter is an open-source ui software development kit based on dart programming language. It is one of the most popular cross-platform application development toolkit.",
  },
  {
    id: 2,
    desc: "Publicly released in may 2017, flutter is comparatively new in the market but has enormous potential courtesy to the number of functionalities it comes with & extended support from its growing community.",
  },
  {
    id: 3,
    desc: "Let’s dive deep into some of the foundational features of flutter.",
  },
];
const outercontent = [
  {
    id: 1,
    heading: "Hot reload",
    desc: "With hot reload feature, you have the ability to make minor changes in the code and witness the impact in real-time that too without any glitches or misses in the frontend.",
  },
  {
    id: 2,
    heading: "Every Pixel count",
    desc: "It is flexible as it gives the ability to access every pixel to accommodate the slightest and slimmest of customizations adding value to your designs and flow requirements.",
  },
  {
    id: 3,
    heading: "Documentation",
    desc: "With an encouraging number of developers turning towards developing apps over flutter, the documentation and community is constantly increasing. With detailed and unmatched documentation, flutter comes with a rich backing.",
  },
  {
    id: 4,
    heading: "Widgets",
    desc: "Divided majorly in two types viz stateless widgets and stateful widgets, flutter comes bundled with a wide variety of widgets that enhance the overall look and feel of mobile application and gives you a comprehensive experience in terms of usage. At Tecblic our expert team of professionals are capable of creating an all-encompassing mobile application that syncs best with our client’s business requirements and support the business penetration for growth and potential enhancement. for details, feel free to ring our numbers.",
    desc:
      `Divided majorly in two types viz stateless widgets and stateful widgets, flutter comes bundled with a wide variety of widgets that enhance the overall look and feel of mobile application and gives you a comprehensive experience in terms of usage.`,
  },
];
const FlutterContent = () => {
  return (
    <d iv className=" text-zinc-500 body-font container mx-auto  px-5 py-10">
      <div className=" ">
        <h2 className="max-w-4xl xl:mb-8 font-sans xl:text-4xl md:text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl text-3xl sm:leading-none">
          BUILD SUSTAINABLE AND SCALABLE APPS WITH FLUTTER
        </h2>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:flex-grow  md:w-full lg:pr-14 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          {fluttercontent.map((item) => (
            <Desc key={item.id} desc={item.desc} />
          ))}
          <h2 className="text-2xl text-black font-bold">
            One code does the trick
          </h2>
          <Desc
            desc=" With flutter, one can build sustainable, secure and scalable apps
            for most of the operating systems. You can write one code for
            android, ios, windows, linux and fuchsia. Additionally, flutter
            provides extensive support for development of native apps also.
            While java and kotlin can be opted for android app development,
            codes in objective-c and swift can be scripted for ios apps."
          />
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-full">
          <img
            className="object-cover object-center rounded"
            alt="Flutter"
            src="/assets/img/flutter/flutter.png" 
          />
        </div>
      </div>
      <div className=" flex md:flex-row flex-col items-center py-5">
        <div className="lg:max-w-lg lg:w-full md:w-full w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Flutter"
            src="/assets/img/flutter/flutter1.png"
          />
        </div>
        <div className="lg:flex-grow xl:-mt-10 lg:-mt-5 md:w-full lg:pr-14 md:pr-10 flex flex-col md:items-start md:text-left md:mb-0 ">
          {outercontent.map((item) => (
            <>
              <h2 className="text-2xl text-black font-bold">{item.heading}</h2>
              <Desc key={item.id} desc={item.desc} />
              <Desc desc="At Tecblic our expert team of professionals are capable of creating an all-encompassing mobile application that syncs best with our client’s business requirements and support the business penetration for growth and potential enhancement. for details, feel free to ring our numbers." />
            </>
          ))}
        </div>
      </div>
    </d>
  );
}

export default FlutterContent