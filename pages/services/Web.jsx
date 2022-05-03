import React from "react";
import Footer from "../../components/Footer";
import InnerPage from "../../components/InnerPage";
import NavBar from "../../components/NavBar";
import WebAndPwa from "./innerpage/WebAndPwa";

const Web = () => {
  return (
    <div>
      <NavBar />
      <InnerPage
        heading="pwa is the future"
        heading2="of apps"
      />
      <WebAndPwa/>
      <Footer />
    </div>
  );
};

export default Web;
