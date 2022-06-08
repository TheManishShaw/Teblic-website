import React from 'react'
import Image from 'next/image';

const Tools = () => {
  return (
    <div className="container px-5 py-14 mx-auto mb-6  ">
      <div className="grid grid-cols-1 gap-7  xl:gap-12 md:grid-cols-3 sm:grid-cols-2 sm:text-center xl:grid-cols-5 object-center">
        <div className="flex items-center justify-center hover:scale-110 hover:animate-bounce overflow-hidden">
          <Image
            src="/assets/img/tools/python.png"
            width="70%"
            height="70%"
            alt="Python"
          />
        </div>
        <div className="flex items-center justify-center hover:scale-110 hover:animate-bounce overflow-hidden">
          <Image
            src="/assets/img/tools/go.png"
            width="100%"
            height="50%"
            alt="Go"
          />
        </div>
        <div className="flex items-center justify-center hover:scale-110 hover:animate-bounce overflow-hidden">
          <Image
            src="/assets/img/tools/django.png"
            width="100%"
            height="50%"
            alt="Django"
          />
        </div>
        <div className="flex items-center justify-center hover:scale-110 hover:animate-bounce overflow-hidden">
          <Image
            src="/assets/img/tools/reactjs.png"
            width="70%"
            height="70%"
            alt="React Js"
          />
        </div>
        <div className="flex items-center justify-center hover:scale-110 hover:animate-bounce overflow-hidden">
          <Image
            src="/assets/img/tools/Odoo_logo.png"
            width="100%"
            height="50%"
            alt="Odoo"
          />
        </div>
      </div>
    </div>
  );
}

export default Tools