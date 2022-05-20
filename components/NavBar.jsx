import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";
import logo from '../public/assets/img/logo.png'
const navigation = [
  {id:1, name: "Services", href: "/services" },
  {id:2, name: "Technology", href: "/technology" },
  {id:3, name: "About us", href: "/about" },
  {id:4, name: "Blogs", href: "/blogs" },
  {id:5, name: "Contact us", href: "/contact" },
];



const NavBar = () => {
  const [nav, setNav] = useState(false);
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
        {navigation.map((item) => (
          <li key={item.id} className="border-b-2 py-3 border-zinc-300 w-full flex justify-between">
            <Link href={item.href}>
              <a>{item.name}</a>
            </Link>
            {/* <ul className="">
              <li >
                <a></a>
                +</li>
            </ul> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
