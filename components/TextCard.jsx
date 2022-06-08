import React from 'react'

const TextCard = (props) => {
  return (
    <div className="p-8 space-y-3 border-1 rounded-xl hover:shadow-lg animated-fade-in-down">
      <h1 className="text-2xl font-bold text-gray-700 capitalize dark:text-black">
        {props.heading}
      </h1>
      <p className="text-gray-500 dark:text-gray-700 ">{props.desc} </p>
    </div>
  );
}

export default TextCard