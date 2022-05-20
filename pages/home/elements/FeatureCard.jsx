import React from 'react'

const FeatureCard = (props) => {
  return (
    <div className="p-6 space-y-3 border-1 rounded-xl hover:shadow-lg">
      <h1 className="text-2xl font-bold text-gray-700 capitalize dark:text-black underline underline-offset-8 ">
        {props.heading}
      </h1>

      <p className="text-gray-500 dark:text-gray-700 pt-3">{props.desc} </p>
    </div>
  );
}

export default FeatureCard