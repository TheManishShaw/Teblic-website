import React from "react";
const Founder1 = (props) => {
  return (
    <div className="py-3">
      <div className=" w-full lg:max-w-full lg:flex">
        <div className="   border-gray-400 lg:border-l-0  lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <p className="py-1 text-zinc-600 text-lg">{props.about}</p>
            <div className="text-gray-900 font-bold text-xl mb-2 mt-2">
              {props.name}
            </div>
            <p className="text-gray-700 text-base">{props.designation}</p>
          </div>
        </div>
        <div className={props.className}></div>
      </div>
    </div>
  );
};

export default Founder1;
