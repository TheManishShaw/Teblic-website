import React, { useState } from "react";
import { MenuIcon, XIcon ,ChevronRightIcon,ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/assets/img/logo.png'
const navigation = [
  {id:1, name: "About us", href: "/about" },
  {id:2, name: "Blogs", href: "/blogs" },
  {id:3, name: "Contact us", href: "/contact" },
];
const services = [
  { id: 1, name: "AI / ML", href: "/services/Ai" },
  { id: 2, name: "Odoo", href: "/services/Odoo" },
  { id: 3, name: "Python", href: "/services/Python" },
  { id: 4, name: "Robotic Processs", href: "/services/Rpa" },
  { id: 5, name: "Business Consulting", href: "/services/Consulting" },
  { id: 6, name: "Business Intelligence", href: "/services/Business" },
  { id: 7, name: "Hire Dedicated Resources", href: "/services/Hire" },
  { id: 8, name: "PWA development", href: "/services/Web" },
];
const technology = [
  { id: 1, name: "AI", href: "/technology/Ai" },
  { id: 2, name: "RPA", href: "/technology/Rpa" },
  { id: 3, name: "Python", href: "/technology/Python" },
  { id: 4, name: "Django", href: "/technology/Django" },
  { id: 5, name: "Golang", href: "/technology/Golang" },
  { id: 6, name: "Flutter", href: "/technology/Flutter" },
  { id: 7, name: "React Js", href: "/technology/Reactjs" },
];

const onTabHandler = () =>{
  return (
    <>
      <li className="border-b-2 py-3 border-zinc-300 w-full flex justify-between">
        <Link href="/technology">
          <a>Tehnology</a>
        </Link>
        <ul className="">
          <li className="text-xl font-bold">
            <a>testing</a>
          </li>
        </ul>
      </li>
    </>
  );
}

const NavBar = () => {
   const [tap, setTap] = useState(false);
  const [nav, setNav] = useState(false);
  const onTabHandler = () => setTap(!tap);
  const [serviceTap, setserviceTap] = useState(false);
  const onTabHandlertech = () => setserviceTap(!serviceTap);
  const handleClick = () => setNav(!nav);
  return (
    <div className="w-screen h-[80px] z-20 bg-zinc-100 fixed drop-shadow-lg ">
      <div className=" 2xl:px-36 xl:px-5 lg:pl-2 md:px-3 sm:px-2 xs:px-2 px-2  flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 mt-1 sm:text-4xl">
            <Link href={"/"}>
              <a className="cursor-pointer">
                {" "}
                <Image src={logo} alt="Logo" />
              </a>
            </Link>
          </h1>
        </div>

        <ul className="hidden md:flex pr-28">
          <div className="group inline-block relative">
            <Link href="/services">
              <a className="text-gray-700 px-4 rounded inline-flex items-center">
                Services
              </a>
            </Link>
            <ul className="absolute  hidden w-60 bg-white rounded-lg text-gray-700 pt-1 group-hover:block transition ease-in-out delay-300">
              {services.map((item) => (
                <li key={item.id} className="flex">
                  <Link href={item.href}>
                    <a className=" rounded-md hover:underline hover:transition hover:underline-offset-2 duration-300 hover:font-semibold bg-white w-full hover:bg-gray-50 py-2 px-4 inline-block whitespace-no-wrap">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="group inline-block relative">
            <Link href="/technology">
              <a className="text-gray-700 px-4 rounded inline-flex items-center">
                Teachnology
              </a>
            </Link>

            <ul className="  absolute animate-right-left  hidden w-60 bg-white rounded-lg text-gray-700 pt-1 group-hover:block transition ease-in-out delay-2000 ">
              {technology.map((item) => (
                <li key={item.id} className="flex">
                  <Link href={item.href}>
                    <a className=" rounded-md hover:underline hover:transition hover:underline-offset-2 duration-300 hover:font-semibold bg-white w-full hover:bg-gray-50 py-2 px-4 inline-block whitespace-no-wrap">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {navigation.map((item) => (
            <li key={item.id} className="px-4 font-normal hover:text-zinc-500 ">
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-200 w-full px-8"}>
        <li className="border-b-2 py-3 border-zinc-300 w-full flex justify-between">
          <Link href="/services">
            <a>Services</a>
          </Link>
          <ul className="">
            <li className="text-xl font-bold">
              <div className="md:hidden" onClick={onTabHandler}>
                {!tap ? (
                  <ChevronRightIcon className="w-5" />
                ) : (
                  <ChevronDownIcon className="w-5" />
                )}
              </div>

              <div
                className={
                  !tap ? "hidden" : "absolute bg-zinc-200 w-full -ml-56"
                }
              >
                <ul className="absolute   w-60 bg-white rounded-lg text-gray-700  group-hover:block transition ease-in-out delay-300">
                  {services.map((item) => (
                    <li key={item.id} className="flex">
                      <Link href={item.href}>
                        <a className="text-sm  hover:underline  hover:underline-offset-2  bg-white w-full hover:bg-gray-50 py-2 px-4 inline-block font-normal">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </li>
        <li className="border-b-2 py-3 border-zinc-300 w-full flex justify-between">
          <Link href="/technology">
            <a>Tehnology</a>
          </Link>
          <ul className="">
            <li className="text-xl font-bold">
              <div className="md:hidden" onClick={onTabHandlertech}>
                {!serviceTap ? (
                  <ChevronRightIcon className="w-5" />
                ) : (
                  <ChevronDownIcon className="w-5" />
                )}
              </div>

              <div
                className={
                  !serviceTap ? "hidden" : "absolute bg-zinc-200 w-full -ml-56"
                }
              >
                <ul className="absolute   w-60 bg-white rounded-lg text-gray-700  group-hover:block transition ease-in-out delay-300">
                  {technology.map((item) => (
                    <li key={item.id} className="flex">
                      <Link href={item.href}>
                        <a className="text-sm  hover:underline  hover:underline-offset-2  bg-white w-full hover:bg-gray-50 py-2 px-4 inline-block font-normal">
                          {item.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </li>
        {navigation.map((item) => (
          <li
            key={item.id}
            className="border-b-2 py-3 border-zinc-300 w-full flex justify-between"
          >
            <Link href={item.href}>
              <a>{item.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
