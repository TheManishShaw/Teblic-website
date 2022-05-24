import React from 'react'
import Image from 'next/image';s
const VideoBanner = () => {
  return (
    <div className=" bg-video bg-no-repeat bg-cover bg-center object-cover">
      <div className="container w-full mx-auto px-6 py-10">
        <div className="flex items-center flex-wrap ">
          <div className="w-full md:w-1/2">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.youtube.com/watch?v=yI1efQG5954"
            >
              <Image
                className="rounded-lg"
                src="/assets/img/banners/video.png"
                alt="use the force"
                width={1000}
                height={510}
              />
            </a>
          </div>
          <div className="w-full md:w-1/2   rounded-md h-full  sm:p-4 ">
            <div className="2xl:p-10 xl:p-7 lg:p-7 md:p-2 sm:p-5 w-full h-full text-center bg-white rounded-lg  shadow-md ">
              <h5 className="mb-2 2xl:text-4xl md:text-sm lg:text-2xl  font-bold text-gray-900  p-3">
                Let’s talk about Odoo 15: Future to simplify your business need
              </h5>
              <p className=" 2xl:mb-4 xl:mb-4 lg:mb-4 md:mb-2 2xl:text-2xl px-6 pb-3 text-left text-gray-500 xl:text-xl lg:text-sm md:text-xs sm:text-sm dark:text-gray-400">
                Do you feel that your business needs polishing in terms of
                processes you follow? Are you efficiently catering to the needs
                of your target audience? Want to take the digital leap but can’t
                find a solution? In this video, I will be answering all your
                queries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoBanner