import React from "react";
import InnerPage from "../../components/InnerPage";
import BusinessIntelligense from "./innerpage/BusinessIntelligense";
import Head from "next/dist/shared/lib/head";

const Business = () => {
  return (
    <div>
      <Head>
        <title>Business Intelligense - Tecblic</title>
      </Head>
      <InnerPage heading="FUEL BUSINESS WITH" heading2="THE POWER OF BI" />
      <BusinessIntelligense />
    </div>
  );
};

export default Business;
