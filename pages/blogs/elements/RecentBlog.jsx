import React from 'react'

const RecentBlog = () => {
  return (
    <>
      <div className="w-full lg:w-4/12 px-5 py-4 h-auto">
        <div>
          <div className="flex flex-wrap -mx-4 mb-8">
            <div className="w-full px-4">
              <h2
                className=" font-semibold text-dark text-2xl sm:text-[28px] pb-5 relative wow fadeInUp"
                data-wow-delay=".1s"
              >
                Popular Articles
              </h2>
              <span className="h-[2px] bg-primary w-20 mb-10 inline-block"></span>
            </div>

            <div className="w-full md:w-1/2 lg:w-full px-4">
              <div
                className=" w-full flex items-center pb-5 mb-5 border-b border-[#F2F3F8] wow fadeInUp "
                data-wow-delay=".1s"
              >
                <div className="w-full max-w-[80px] h-20 rounded-full overflow-hidden mr-5">
                  <img src="/favicon.png" alt="image" className="w-full" />
                </div>
                <div className="w-full">
                  <h4>
                    <a
                      href="#"
                      className=" text-lg lg:text-base xl:text-lg leading-snug font-medium text-dark hover:text-primary mb-1 inline-block"
                    >
                      Odoo CRM Integration with Whatsapp Chatbot!
                    </a>
                  </h4>
                  <p className="text-sm text-body-color">Tecblic</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-full px-4">
              <div
                className=" w-full flex items-center pb-5 mb-5 border-b border-[#F2F3F8] wow fadeInUp"
                data-wow-delay=".1s "
              >
                <div className=" w-full max-w-[80px] h-20 rounded-full overflow-hidden mr-5">
                  <img src="/favicon.png" alt="image" className="w-full" />
                </div>
                <div className="w-full">
                  <h4>
                    <a
                      href="#"
                      className="text-lg lg:text-base xl:text-lg leading-snug font-medium text-dark hover:text-primary mb-1 inline-block"
                    >
                      Odoo 15: Future of business simplified
                    </a>
                  </h4>
                  <p className="text-sm text-body-color">Tecblic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentBlog;