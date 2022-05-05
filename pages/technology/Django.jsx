import React from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import InnerPage from "../../components/InnerPage";
import FlutterContent from "./subpages/FlutterContent";
import DjangoContent from "./subpages/DjangoContent";
const Django = () => {
  return (
    <>
      <NavBar />
      <InnerPage heading="SCALE BUSINESS SECURELY" heading2="WITH DJANGO" />
      <DjangoContent />
      <Footer />
    </>
  );
};

export default Django;
