import React from 'react'
import Hero from '../../components/Hero';
import Subscribe from '../../components/Subscribe';
import Tools from '../../components/Tools';
import Blogs from '../blogs/Blogs';
import About from './elements/About';
import Features from './elements/Features';
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
const Home = () => {
  return (
    <>
      <Hero
        classs="w-full h-screen bg-home bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between"
        heading="Research. Innovate."
        heading1="Delight. Sustain."
      />
      <Features />
      <About />
      <Blogs />
      <Tools />
      <Subscribe />

      <div className="container sm:px-1 xl:px-8 lg:px-8 md:px-8 xl:py-14 md:py-10 lg:py-10 sm:py-10 mx-auto my-5  ">
        <h1 className=" text-3xl font-bold underline underline-offset-8 px-1 mb-6">
          Contact Us
        </h1>
        <div className="shadow-md rounded-lg border border-gray-100  ">
          <div className="grid grid-cols-1 gap-2  xl:gap-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols- sm:items-center xl:grid-cols-2">
            <div className="">
              <form className="p-5">
                <h2 className="text-lg font-bold pb-5">
                  Let’s discuss the possibilities
                </h2>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      className=" block w-full  text-gray-900 border  rounded py-2 px-4  leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="You Are"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <input
                      className=" block w-full  text-gray-900 border  rounded py-2 px-4 mb-0 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="phone"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <input
                      className=" block w-full  text-gray-900 border  rounded py-2 px-4 mb-0 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Email"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <input
                      className=" block w-full  text-gray-900 border  rounded py-2 px-4 mb-0 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3">
                  <div className="w-full px-3">
                    <textarea
                      placeholder="Looking for..."
                      rows="2"
                      className="appearance-none block w-full  text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white "
                    ></textarea>
                  </div>

                  <button
                    className="shadow bg-black hover:bg-zinc-600 focus:shadow-outline border-0 focus:outline-none text-white font-bold py-2 px-6 ml-3 rounded"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="grid grid-cols-1 gap-2  xl:gap-2 md:grid-cols-2 sm:grid-cols-1 sm:items-center xl:grid-cols-3 mb-4">
                <div className="flex pl-5">
                  <MailIcon className="h-6 text-black mt-2" />
                  <p className="px-2 font-normal py-2">
                    <a href="mailto:info@tecblic.com"> info@tecblic.com</a>
                  </p>
                </div>
                <div className="flex pl-5">
                  <PhoneIcon className="h-6 text-black px-1 mt-2" />
                  <p className="px-2 font-normal py-2">
                    {" "}
                    <a href="tel:+91-7777907777"> +91-7777907777 </a>
                  </p>
                </div>
                <div className="flex pl-5">
                  <PhoneIcon className="h-6 text-black px-1 mt-2" />
                  <p className="px-2 font-normal py-2">
                    {" "}
                    <a href="tel:+44 7947772257"> +44 7947772257 </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 w-full h-full">
              <iframe
                title="Office Map address"
                className="rounded-md"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14686.259627080923!2d72.507459!3d23.0397423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21347c8e76fbf474!2sTecblic%20Private%20Limited!5e0!3m2!1sen!2sin!4v1646190404457!5m2!1sen!2sin"
                width="100%"
                height="100%"
                aria-hidden="false"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home