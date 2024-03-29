import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="footer bg-black relative pt-1 px-3">
      <div className="container mx-auto sm:px-3 xl:px-8 lg:px-8 md:px-8">
        <div className="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className=" space-y-3 border-1 rounded-xl hover:shadow-lg">
            <Image
              src="/assets/img/logo-2.png"
              width={250}
              height={85}
              alt="Logo"
            />
            <p className="text-white font-bold text-xl py-2 md:p-1">
              An Innovation-Driven Company
            </p>
            <p className="text-white">
              We At Tecblic As A Home For Creative Minds And Family Of Wonderful
              People. We Believe, Respect, And See The Vision Can Support An
              Idea And Make It A Reality.
            </p>
            <div className="d-flex pt-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/tecblic/"
                className="mr-5"
              >
                <Image
                  src="/assets/img/social/instagram.svg"
                  width={30}
                  height={30}
                  alt="Instagram"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/tecblic/mycompany/"
                className="mx-5"
              >
                <Image
                  src="/assets/img/social/linkedin.svg"
                  width={30}
                  height={30}
                  alt="Linkedin"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/tecblic/?ref=pages_you_manage"
                className="mx-5"
              >
                <Image
                  src="/assets/img/social/facebook.svg"
                  width={30}
                  height={30}
                  alt="Facebook"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/tecblic"
                className="mx-5"
              >
                <Image
                  src="/assets/img/social/pinterest.svg"
                  width={30}
                  height={30}
                  alt="Pinterest"
                />
              </a>
            </div>
          </div>
          <div className=" px-0  border-1 rounded-xl hover:shadow-lg lg:text-center ">
            <h1 className="text-2xl font-bold text-white capitalize  px-2">
              Menu
            </h1>

            <ul className="">
              <li className="text-white py-3">
                <Link href="/services" className="cursor-pointer"> Services</Link>
              </li>
              <li className="text-white py-3">
                <Link  href='/technology' className="cursor-pointer">Technology</Link>
              </li>
              <li className="text-white py-3">
                <Link href="/about" className="cursor-pointer">About Us</Link>
              </li>
              <li className="text-white py-3">
                <Link href="/contact" className="cursor-pointer">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className=" space-y-2 sm:p-1">
            <h1 className="text-2xl font-bold text-white capitalize ">
              Our Offices
            </h1>
            <p className="text-white font-bold text-xl">India</p>
            <p className="text-white">
              510/511, Shivalik Shilp 2, Judges Bunglow Rd, Vastrapur,
              Ahmedabad, Gujarat 380015
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
            <p className="text-md text-white font-normal mb-2 tracking-wider">
              © Copyright Tecblic 2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
