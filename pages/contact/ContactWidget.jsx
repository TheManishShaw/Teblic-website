import React, { useState } from 'react';
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import swal from "sweetalert";

const ContactWidget = (props) => {
const [form, setForm] = useState({})
const [errors, setErrors] = useState({})
const setField = (field, value) =>{
  setForm({
    ...form,
    [field]:value
  })
  if(!!errors[field])
  setErrors({
    ...errors,
    [field]:null
  })
}
const SubmitForm = (form) => {
   const { firstname, phone, email, subject, message } = form;
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
    setForm({
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
      title: "Someting went worng",
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

}
const validdateForm = () =>{
  const { firstname, phone, email, subject, message } = form;
  const newErrors = {}

  if(!firstname || firstname === '') newErrors.firstname = 'Please enter your name'
  if (!phone || phone === "") newErrors.phone = "Please enter a phone no.";
  
  else if (!/^[0-9\b]+$/i.test(phone)) {newErrors.phone = "Enter a vaild phone no";}
   
  if (!email || email === "") newErrors.email = "Please enter a valid email";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    newErrors.email = "Invalid email address";
 
  }
   if (!subject || subject === "") newErrors.subject = "Please enter a subject";
   if (!message || message === "") newErrors.message = "Please write something"
   else if (message.length < 10) newErrors.message = 'message is too short'

  return newErrors
}
const submitData = async (event) => { 
    event.preventDefault();
const formErrors = validdateForm()
if(Object.keys(formErrors).length >0){
  setErrors(formErrors)
}
else{
  SubmitForm(form);
}



  };
  return (
    <div className="container px-8 xl:py-14 md:py-10 lg:py-10 sm:py-10 mx-auto my-5">
      <h1 className=" text-3xl font-bold underline underline-offset-8 px-1 mb-6">
        {props.heading}
      </h1>
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
                    className={` block w-full  text-gray-900 border  rounded py-2 px-4  leading-tight focus:outline-none focus:bg-white${
                      errors.firstname ? "border border-red-500" : ""
                    }`}
                    id="grid-first-name"
                    type="text"
                    name="firstname"
                    placeholder="You Are"
                    value={form.firstname}
                    onChange={(e) => setField("firstname", e.target.value)}
                  />
                  <p className="text-red-500 px-1">{errors.firstname}</p>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  <input
                    className={`block w-full  text-gray-900 border  rounded py-2 px-4 mb-0 leading-tight focus:outline-none focus:bg-white${
                      errors.phone ? "border border-red-500" : ""
                    }`}
                    id="grid-first-name"
                    type="phone"
                    name="phone"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) => setField("phone", e.target.value)}
                  />
                  <p className="text-red-500 px-1">{errors.phone}</p>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <input
                    className={`block w-full  text-gray-900 border  rounded py-2 px-4 mb-0 leading-tight focus:outline-none focus:bg-white ${
                      errors.firstname ? "border border-red-500" : ""
                    }`}
                    id="grid-first-name"
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setField("email", e.target.value)}
                  />
                  <p className="text-red-500 px-1">{errors.email}</p>
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <input
                    className={`block w-full  text-gray-900 border  rounded py-2 px-4 mb-0 leading-tight focus:outline-none focus:bg-white${
                      errors.firstname ? "border border-red-500" : ""
                    }`}
                    id="grid-first-name"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) => setField("subject", e.target.value)}
                  />
                  <p className="text-red-500 px-1">{errors.subject}</p>
                </div>
              </div>

              <div className="flex flex-wrap -mx-3">
                <div className="w-full px-3">
                  <textarea
                    placeholder="Looking for..."
                    name="message"
                    rows="2"
                    className={`appearance-none block w-full  text-gray-900 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white${
                      errors.firstname ? "border border-red-500" : ""
                    }`}
                    value={form.message}
                    onChange={(e) => setField("message", e.target.value)}
                  ></textarea>
                  <p className="text-red-500 px-1">{errors.message}</p>
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
