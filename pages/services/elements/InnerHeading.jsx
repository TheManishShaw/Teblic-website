import React from 'react'

const InnerHeading = (props) => {
  return (
    <h2 className="max-w-2xl mb-6 font-sans xl:text-3xl text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl sm:leading-none">
    {props.heading1}
      <br className="hidden md:block" />
      {props.heading2}
    </h2>
  );
}

export default InnerHeading;