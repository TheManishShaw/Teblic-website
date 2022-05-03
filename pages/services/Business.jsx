import React from "react";
import Footer from "../../components/Footer";
import InnerPage from "../../components/InnerPage";
import NavBar from "../../components/NavBar";
import BusinessIntelligense from "./innerpage/BusinessIntelligense";


const Business = () => {
  return (
    <div>
      <NavBar />
      <InnerPage heading="FUEL BUSINESS WITH" heading2="THE POWER OF BI" />
        <BusinessIntelligense/>
      <Footer />
    </div>
  );
};

export default Business;
