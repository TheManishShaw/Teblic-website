import React from 'react'
import SingleBlog from './SingleBlog';

const Blogs = () => {
  return (
    <>
      <div className="container px-5 py-12 mx-auto">
        <h1 className="text-3xl font-bold underline underline-offset-8 mb-10">
          Blogs
        </h1>
        <div className=" grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8">
          <SingleBlog
            img="/assets/img/blog/blog3.png"
            title="Testing"
            desc="Future is all about possibilities and we are on a technology driven way! When you hear about the future of our world, what is the exact thing that crosses your mind? Will there "
          />
          <SingleBlog
            img="/assets/img/blog/blog1.png"
            title="Testing"
            desc="How can you streamline your business process Do your business plans, models, and process give the desired output? Do you feel that your company"
          />
          <SingleBlog
            img="/assets/img/blog/blog2.png"
            title="Testing"
            desc="Redefining business processes that leads to success! For the first few years of business, most companies are focused on survival. However, prioritizing the growth of your"
          />
        </div>
      </div>
    </>
  );
}

export default Blogs
