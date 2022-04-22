import React from 'react'

const About = () => {
  return (
    <section className="bg-zinc-200 px-4 py-5">
      <div className="container xl:py-7 md:py-10 lg:py-10 sm:py-10 mx-auto my-5 ">
        <h1 className=" text-3xl font-bold underline underline-offset-8 px-2 mb-4">
          About Tecblic
        </h1>
        <h4 className="text-2xl font-bold xl:mt-5 xl:mb-1">
          Innovation is in our dna
        </h4>
        <p className="py-2 text-lg font-regular">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </section>
  );
}

export default About