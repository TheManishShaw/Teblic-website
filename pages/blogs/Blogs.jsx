import React from 'react'
import SingleBlog from './SingleBlog';

const blogcontent = [
  {
    id: 1,
    img: "/assets/img/blog/blog3.png",
    title: "Odoo CRM Integration with Whatsapp Chatbot!",
    desc: "How can you streamline your business process Do your business plans, models, and process give the desired",
    category: "Web",
    authimg:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
    authname: "Manish Shaw",
    authdeg: "Author",
    view: "120k",
    comment: "12",
    date: "12-12-2022",
  },
  {
    id: 2,
    img: "/assets/img/blog/blog1.png",
    title: "Glimpse to the future of AI/ML",
    desc: "How can you streamline your business process Do your business plans, models, and process give the desired output?",
    category: "Web",
    authimg:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
    authname: "Manish Shaw",
    authdeg: "Author",
    view: "100k",
    comment: "12",
    date: "30-12-2012",
    
  },
  {
    id: 3,
    img: "/assets/img/blog/blog1.png",
    title: "Odoo 15: Future of business simplified",
    desc: "How can you streamline your business process Do your business plans, models, and process give the desired output?",
    category: "Web",
    authimg:
      "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260",
    authname: "Manish Shaw",
    authdeg: "Author",
    view: "20k",
    comment: "12",
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
              authimg={item.authimg}
              authname={item.authname}
              authdeg={item.authdeg}
              view={item.view}
              comment={item.comment}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs
