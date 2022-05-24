import React from 'react'

const Hero = (props) => {
  return (
    <div className={props.classs} data-wow-delay=".2s">
      <div className="grid md:grid-cols-1 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center w-full px-2 py-5">
          <h1 className="py-4 text-5xl md:text-7xl font-bold text-zinc-100 uppercase text-center">
            {props.heading}
            <br />
            {props.heading1}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero