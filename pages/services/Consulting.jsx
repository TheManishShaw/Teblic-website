import React from "react";
import InnerPage from "../../components/InnerPage";
import { ConsultingPartner } from "./innerpage/ConsultingPartner";


export const Consulting = () => {
  return (
    <div>
      <InnerPage heading="HAVE A CONCERN" heading2="LET'S CONSULT" />
        <ConsultingPartner/>
    </div>
  );
};
export default Consulting;
