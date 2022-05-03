import React from 'react'

const InnerPage = (props) => {
  return (
    <div className="w-full h-screen-30 bg-black bg-no-repeat object-cover bg-cover bg-center flex flex-col justify-between">
      <div className="grid md:grid-cols-1 max-w-[1240px] m-auto py-20 mt-20">
        <div className="flex flex-col justify-center w-full px-2 py-5">
          <h1 className="py-4 text-3xl md:text-5xl font-bold text-zinc-100 uppercase text-left">
            {props.heading}
            <br />
            {props.heading2}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default InnerPage;