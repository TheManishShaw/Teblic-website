import React,{useState} from 'react'

const Subscribe = () => {
  const [userData, setUserData] = useState({
    email: "",
  });
   let name, value;
  const postUserData = (event) =>{
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]:value })
  };
 const onSubscribe = async (event) => {
   event.preventDefault();
   const { email } = userData;
   if ( email ) {
     const res = fetch(
       "https://tecblic-website-form-default-rtdb.asia-southeast1.firebasedatabase.app/Subscribe.json",
       {
         method: "POST",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify({           
           email,          
         }),
       }
     );
     if (res) {
       setUserData({
         email: "",
       });
       swal({
         title: "Data Successfully",
         text: "we will contact you soon!!",
         icon: "success",
         button: "okay",
       });
     } else {
       swal({
         title: "Please enter your email",
         text: "",
         icon: "warning",
         button: "Okay",
       });
     }
   } else {
     swal({
       title: "Please enter your email",
       text: "",
       icon: "warning",
       button: "Okay",
     });
   }
 };




  return (
    <div className=" bg-zinc-100 px-4 py-12  ">
      <div className="max-w-3xl mx-auto">
        <h2 className="xl:text-3xl text-left sm:text-xl  font-semibold text-gray-800 ">
          Subscribe to our newsletter
        </h2>
        <p className="text-gray-700 xl:text-lg sm:text-xs pl-px">
          Track the latest of technologies with our newsletter.
        </p>
        <form action="#" className="mt-2 py-2">
          <div className="flex items-center bg-white px-2 py-2 rounded">
            <input
              type="email"
              name="email"
              placeholder=" emails are good start."
              className="w-full px-2 py-2 mr-2  rounded-md border-0 focus:outline-none"
              required
              value={userData.email}
              onChange={postUserData}
            />
            <button
              className="bg-black border-0 text-gray-200 px-10 py-2 font-bold rounded shadow "
              onClick={onSubscribe}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe