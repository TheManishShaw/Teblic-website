import React from 'react'
import { TwitterIcon, TwitterShareButton, FacebookShareButton,LinkedinShareButton, WhatsappShareButton, FacebookIcon, LinkedinIcon, WhatsappIcon, } from "react-share";
const BlogShare = () => {

  return (
    <>
      <div className="flex flex-wrap items-center -mx-4 mb-12">
        <div className="w-full md:w-2/4 px-4">
          <div className="flex items-center flex-wrap "></div>
        </div>
        <div className="w-full md:w-2/4 px-4">
          <div className="flex justify-end wow fadeInUp" data-wow-delay=".1s">
            <span className="text-sm mt-2   text-body-color font-medium mr-4">
              Share This Post
            </span>
            <div className="flex gap-2 items-center">
              <FacebookShareButton url="https://www.tecblic.com/">
                <FacebookIcon
                  size={32}
                  round={true}
                  url={"/"}
                  className="cursor-pointer"
                />
              </FacebookShareButton>
              <TwitterShareButton url="https://www.tecblic.com/">
                <TwitterIcon
                  size={32}
                  round={true}
                  className="cursor-pointer"
                />
              </TwitterShareButton>
              <LinkedinShareButton url="https://www.tecblic.com/">
                <LinkedinIcon
                  size={32}
                  round={true}
                  className="cursor-pointer"
                />
              </LinkedinShareButton>
              <WhatsappShareButton url="https://www.tecblic.com/">
                <WhatsappIcon
                  size={32}
                  round={true}
                  className="cursor-pointer"
                />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogShare