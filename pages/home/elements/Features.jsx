import React from 'react'
import FeatureCard from './FeatureCard';

const Features = () => {
  return (
    <div className="container 2xl:px-4 sm:px-1 xl:px-8 lg:px-2 md:px-8 xl:py-10 md:py-10 lg:py-7 sm:py-10 mx-auto my-5">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3">
        <FeatureCard
          heading="Our Vision"
          desc="Tecblic aims to be a global leader in providing well-researched solutions and products that assists in automating businesses globally. Our vision is to be one of the largest employers in the world."
        />
        <FeatureCard
          heading="Our Mission"
          desc="We are an innovation driven company on a mission to build revolutionary products and solutions by nurturing a workplace culture where innovations and excellence thrives, empowering clients to live the future in the present."
        />
        <FeatureCard
          heading="Our Values"
          desc="We value our team and their emotions, as we love to hear stories and life lessons of our family of tech-lovers during various team building sessions. We are the colours of a bright rainbow. Join us as we create history with our work and success parties."
        />
      </div>
    </div>
  );
}

export default Features