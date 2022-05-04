import React from 'react'
import SingleBlog from './SingleBlog';

const blogcontent = [
  {
    id: 1,
    img: "/assets/img/blog/blog3.png",
    title: "Odoo CRM Integration with Whatsapp Chatbot!",
    desc: "How can you streamline your business process Do your business plans, models, and process give the desired",
    category: "Web",
    date: "12-12-2022",
  },
  {
    id: 2,
    img: "/assets/img/blog/blog1.png",
    title: "Glimpse to the future of AI/ML",
    desc: "How can you streamline your business process Do your business plans, models, and process give the desired output?",
    category: "Web",
  
    date: "30-12-2012",
    
  },
  {
    id: 3,
    img: "/assets/img/blog/blog1.png",
    title: "Odoo 15: Future of business simplified",
    desc: "How can you streamline your business process Do your business plans, models, and process give the desired output?",
    category: "Web",
    date: "12-02-2021",
  },
];


const Blogs = () => {
  return (
    <>
      <div className="container px-5 py-12 mx-auto">
        <h1 className="text-3xl font-bold underline underline-offset-8 mb-10">
          Blogs
        </h1>
        <div className=" grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-8">
          {blogcontent.map((item) => (
            <SingleBlog
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              category={item.category}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs
