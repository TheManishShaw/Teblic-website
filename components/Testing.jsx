export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <div className="max-w-2xl py-4 px-8 bg-white shadow-lg rounded-lg ">
          <div className="flex justify-center md:justify-start -mt-16">
            <img
              className="w-25 h-20 object-cover rounded-full mb-5"
              src="/assets/img/shinoj.png"
            />
          </div>


          
    

          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">
              Shinoj Nair
            </h2>
            <h4 className="text-lg">Founder</h4>
            <p className="mt-2 text-gray-600">
              Mr. shinoj nair co-founder of the company, having nearly 15+ years
              of experience in the it industry. He is an eminent individual who
              has a vision of bridging the gap between business requirements and
              the technology. Mr. shinoj nair has been coming from a technology
              background and provides a culture of learning and amazing
              opportunities to individuals to grow. Over the years, he has been
              helping companies go from being smbs to enterprises.
            </p>
          </div>
        </div>
        <div className="max-w-2xl py-4 px-8 bg-white shadow-lg rounded-lg ">
          <div className="flex justify-center md:justify-start xl:-mt-16 lg:-mt-16 md:-mt-16 sm:mt-10">
            <img
              className="w-25 h-20 object-cover rounded-full mb-5"
              src="/assets/img/heena.png"
            />
          </div>
          <div>
            <h2 className="text-gray-800 text-3xl font-semibold">Heena Nair</h2>
            <h4 className="text-lg">Founder</h4>
            <p className="mt-2 text-gray-600">
              With more than 10 years of experience in software development and
              project management, she collaborates with the teams and ensures
              smooth delivery of the projects. She has a strong creative vision
              with an understanding of business objectives and proven expertise
              in concept development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;