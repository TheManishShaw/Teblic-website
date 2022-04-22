import React from 'react'

const Heading = (props) => {
  return (
    <>
      <h2 className="text-3xl underline underline-offset-8 pl-8 font-bold py-4">
        {props.heading}
      </h2>
    </>
  );
}

export default Heading