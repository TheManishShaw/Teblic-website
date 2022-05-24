import React from "react";
import InnerPage from "../../components/InnerPage";
import WebAndPwa from "./innerpage/WebAndPwa";
import Head from "next/dist/shared/lib/head";
const Web = () => {
  return (
    <div>
      <Head>
        <title>Web - Tecblic</title>
      </Head>
      <InnerPage heading="pwa is the future" heading2="of apps" />
      <WebAndPwa />
    </div>
  );
};

export default Web;
