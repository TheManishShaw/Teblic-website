import React from 'react'
import Image from 'next/dist/client/image';
const SingleBlog = (props) => {
  return (
    <div className=" rounded-xl shadow-xl bg-white hover:scale-105 hover:ease-in-out transition-all">
      <Image
        src={props.img}
        alt="Blog Images"
        width={1000}
        height={500}
        className="rounded-t-lg h-60 w-full object-cover"
      />

      <header className=" text-xl font-bold p-3 px-9 mt-2">{props.title}</header>
      <div className="px-5">
        <p className=" px-4 text-zinc-500">{props.desc}</p>
      </div>
      <footer className="text-left py-2 px-5 text-gray-500">
        <button className="py-2 px-4 mt-1 border-transparent bg-transparent	 rounded-xl text-black font-bold hover:text-zinc-600">
          Read more
        </button>
      </footer>
    </div>
  );
}

export default SingleBlog
