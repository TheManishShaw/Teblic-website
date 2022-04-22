import React from 'react'

const Subscribe = () => {
  return (
    <div className=" bg-zinc-100 px-4 py-12  ">
      <div className="max-w-3xl mx-auto">
        <h2 className="xl:text-3xl text-left sm:text-xl  font-semibold text-gray-800 ">
          Subscribe to our newsletter
        </h2>
        <p className="text-gray-700 xl:text-lg sm:text-xs pl-px">
          Track the latest of technologies with our newsletter.
        </p>
        <form action="#" className="mt-2 py-2">
          <div className="flex items-center bg-white px-2 py-2 rounded">
            <input
              type="email"
              placeholder=" emails are good start."
              className="w-full px-2 py-2 mr-2  rounded-md border-0 focus:outline-none"
              required
            />
            <button className="bg-black border-0 text-gray-200 px-10 py-2 font-bold rounded shadow ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe