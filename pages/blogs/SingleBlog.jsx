import React from 'react'
import Image from 'next/dist/client/image';
const SingleBlog = (props) => {
  return (
    <div className=" rounded-xl shadow-xl bg-white hover:scale-105 hover:ease-in-out transition-all">
      <a href="blogs/BlogView">
        <Image
          src={props.img}
          alt="Blog Images"
          width={1000}
          height={400}
          className="rounded-t-lg h-60 w-full object-cover"
        />
      </a>
      <p className="mt-3 px-9 text-xs font-semibold tracking-wide uppercase">
        <a
          className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          aria-label="Category"
        >
          {props.category}
        </a>{" "}
        <span className="text-gray-600">— {props.date}</span>
      </p>
      <a href="blogs/BlogView">
        <header className=" text-xl font-bold p-3 px-9">{props.title}</header>
        <div className="px-5">
          <p className=" px-4 text-zinc-500">{props.desc}</p>
        </div>
      </a>
      <footer className="text-left  py-2 px-5 text-gray-500 mb-2">
        <div className="flex items-center  inset-x-0 bottom-0 flex-wrap mt-2">
          <a aria-label="Author" title="Author" className="mr-3">
            <img
              src={props.authimg}
              alt="avatar"
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </a>
          <div>
            <a
              aria-label="Author"
              title="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {props.authname}
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              {props.authdeg}
            </p>
          </div>

          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            {props.view}
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
            </svg>
            {props.comment}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default SingleBlog;
