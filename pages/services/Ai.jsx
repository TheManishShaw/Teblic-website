import React from "react";
import Footer from "../../components/Footer";
import InnerPage from "../../components/InnerPage";
import NavBar from "../../components/NavBar";
import AiContent from "./innerpage/AiContent";


const Ai = () => {
  return (
    <div>
      <NavBar />
      <InnerPage
        heading="EXPLORE POSSIBILITIES"
        heading2="ARTIFICIAL INTELLIGENCE"
      />
      <AiContent />
      <Footer />
    </div>
  );
};

export default Ai;
