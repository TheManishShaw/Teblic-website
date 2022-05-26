import React, { useState } from 'react';
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import swal from "sweetalert";

const ContactWidget = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
   let name, value;
  const postUserData = (event) =>{
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]:value })
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstname, phone, email, subject, message } = userData;
if (firstname && phone && email && subject && message) {
  const res = fetch(
    "https://tecblic-website-form-default-rtdb.asia-southeast1.firebasedatabase.app/userDatafrom.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        phone,
        email,
        subject,
        message,
      }),
    }
  );
  if (res) {
    setUserData({
      firstname: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    });
    swal.center;
    swal({
      title: "Thank you!",
      text: "Your message has been successfully sent. We will contact you very soon!",
      icon: "success",
      button: "okay",
    });
  } else {
    swal({
      title: "Please fill empty fields",
      text: "",
      icon: "error",
      button: "Okay",
    });
  }
} else {
  swal({
    title: "Please fill empty fields",
    text: "",
    icon: "warning",
    button: "Okay",
  });
}
  };

 
  return (
    <div className="container px-8 xl:py-14 md:py-10 lg:py-10 sm:py-10 mx-auto my-5">
      <div className="shadow-md rounded-lg border border-gray-100  ">
        <div className="grid grid-cols-1 gap-2  xl:gap-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols- sm:items-center xl:grid-cols-2">
          <div className="">
            <form className="p-5" method="POST">
              <h2 className="text-lg font-bold pb-5">
                Let’s discuss the possibilities
              </h2>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className=" block w-full  text-gray-900 border  rounded py-2 px-4  leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name="firstname"
                    placeholder="You Are"
                    value={userData.firstname}
                    onChange={postUserData}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className=" block w-full  text-gray-900 border  rounded py-2 px-4 mb-0 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    value={userData.phone}
                    onChange={postUserData}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className=" block w-full  text-gray-900 border  rounded py-2 px-4 mb-0 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={userData.email}
                    onChange={postUserData}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className=" block w-full  text-gray-900 border  rounded py-2 px-4 mb-0 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={userData.subject}
                    onChange={postUserData}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <textarea
                    placeholder="Looking for..."
                    value={userData.message}
                    name="message"
                    onChange={postUserData}
                    rows="2"
                    className="appearance-none block w-full  text-gray-900 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  ></textarea>
                </div>

                <button
                  className="shadow bg-black hover:bg-zinc-600 focus:shadow-outline border-0 focus:outline-none text-white font-bold py-2 px-6 ml-3 rounded"
                  type="submit"
                  onClick={submitData}
                >
                  Submit
                </button>
              </div>
            </form>
            <div className="grid grid-cols-1 gap-2  xl:gap-2 md:grid-cols-2 sm:grid-cols-1 sm:items-center xl:grid-cols-3 mb-4">
              <div className="flex pl-5">
                <MailIcon className="h-6 text-black mt-2" />
                <p className="px-2 font-normal py-2">
                  <a href="mailto:info@tecblic.com"> info@tecblic.com</a>
                </p>
              </div>
              <div className="flex pl-5">
                <PhoneIcon className="h-6 text-black px-1 mt-2" />
                <p className="px-2 font-normal py-2">
                  {" "}
                  <a href="tel:+91-7777907777"> +91-7777907777 </a>
                </p>
              </div>
              <div className="flex pl-5">
                <PhoneIcon className="h-6 text-black px-1 mt-2" />
                <p className="px-2 font-normal py-2">
                  {" "}
                  <a href="tel:+44 7947772257"> +44 7947772257 </a>
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 w-full h-full">
            <iframe
              title="Office Map address"
              className="rounded-md"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14686.259627080923!2d72.507459!3d23.0397423!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x21347c8e76fbf474!2sTecblic%20Private%20Limited!5e0!3m2!1sen!2sin!4v1646190404457!5m2!1sen!2sin"
              width="100%"
              height="100%"
              aria-hidden="false"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactWidget;
