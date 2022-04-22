import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="footer bg-black relative pt-1">
      <div className="container mx-auto px-6 sm:px-2">
        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className=" space-y-3 border-1 rounded-xl hover:shadow-lg">
            <Image
              src="/assets/img/logo-2.png"
              width={300}
              height={100}
              layout="fixed"
              alt='Logo'
            />
            <p className="text-white font-bold text-xl py-2 md:p-1">
              An Innovation-Driven Company
            </p>
            <p className="text-white">
              We At Tecblic As A Home For Creative Minds And Family Of Wonderful
              People. We Believe, Respect, And See The Vision Can Support An
              Idea And Make It A Reality.
            </p>
          </div>
          <div className=" px-0  border-1 rounded-xl hover:shadow-lg lg:text-center ">
            <h1 className="text-2xl font-bold text-gray-700 capitalize dark:text-white px-2">
              Menu
            </h1>

            <ul className="">
              <li className="text-white py-3">Services</li>
              <li className="text-white py-3">Technology</li>
              <li className="text-white py-3">About Us</li>
              <li className="text-white py-3">Contact Us</li>
            </ul>
          </div>
          <div className=" space-y-2 sm:p-1">
            <h1 className="text-2xl font-bold text-gray-700 capitalize dark:text-white">
              Our Offices
            </h1>
            <p className="text-white font-bold text-xl">India</p>
            <p className="text-white">
              A-305 Stellar complex, Sindhu Bhavan Road, Ahmedabad- 380054.
            </p>

            <p className="text-white font-bold text-xl">Norway</p>
            <p className="text-white">Skvadronvegen 3, 4050 Sola</p>

            <p className="text-white font-bold text-xl">Canada</p>
            <p className="text-white">
              580, Duncan Street, Milton Ontario, Canada
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col">
          <div className="sm:w-2/3 text-left py-6">
            <p className="text-md text-white font-semibold mb-2">
              © Copyright Tecblic 2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
