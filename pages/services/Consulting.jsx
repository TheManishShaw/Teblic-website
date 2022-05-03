import React from "react";
import Footer from "../../components/Footer";
import InnerPage from "../../components/InnerPage";
import NavBar from "../../components/NavBar";
import { ConsultingPartner } from "./innerpage/ConsultingPartner";


export const Consulting = () => {
  return (
    <div>
      <NavBar />
      <InnerPage heading="HAVE A CONCERN" heading2="LET'S CONSULT" />
        <ConsultingPartner/>
      <Footer />
    </div>
  );
};
export default Consulting;
