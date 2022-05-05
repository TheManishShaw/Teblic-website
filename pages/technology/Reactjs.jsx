import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import InnerPage from "../../components/InnerPage";
import ReactContent from "./subpages/ReactContent";
const Reactjs = () => {
  return (
    <>
      <NavBar />
      <InnerPage heading="LIKE OUR WEBSITE?" heading2="ITS REACT." />
      <ReactContent />
      <Footer />
    </>
  );
};

export default Reactjs;
