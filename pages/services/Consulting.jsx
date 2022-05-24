import React from "react";
import InnerPage from "../../components/InnerPage";
import { ConsultingPartner } from "./innerpage/ConsultingPartner";
import Head from "next/dist/shared/lib/head";

export const Consulting = () => {
  return (
    <div>
      <Head>
        <title>Consulting - Tecblic</title>
      </Head>
      <InnerPage heading="HAVE A CONCERN" heading2="LET'S CONSULT" />
      <ConsultingPartner />
    </div>
  );
};
export default Consulting;
