import React from 'react'

const testing = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        <div className="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">App Development</p>
            <div className="flex space-x-2 text-gray-400 text-sm">
              <p>
                We are an innovation driven company on a mission to build
                revolutionary products and solutions by nurturing a workplace
                culture where innovations and excellence thrives, empowering
                clients to live the future in the present.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">Web Design</p>
            <div className="flex space-x-2 text-gray-400 text-sm">
              <p>
                We are an innovation driven company on a mission to build
                revolutionary products and solutions by nurturing a workplace
                culture where innovations and excellence thrives, empowering
                clients to live the future in the present.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">Leading Page</p>
            <div className="flex space-x-2 text-gray-400 text-sm">
              <p>
                We are an innovation driven company on a mission to build
                revolutionary products and solutions by nurturing a workplace
                culture where innovations and excellence thrives, empowering
                clients to live the future in the present.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-white py-6 px-6 rounded-3xl w-96 my-4 shadow-xl">
          <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
          </div>
          <div className="mt-8">
            <p className="text-xl font-semibold my-2">Business Compare</p>

            <div className="flex space-x-2 text-gray-400 text-sm my-3">
              <p>
                We are an innovation driven company on a mission to build
                revolutionary products and solutions by nurturing a workplace
                culture where innovations and excellence thrives, empowering
                clients to live the future in the present.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default testing