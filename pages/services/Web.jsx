import React from "react";
import InnerPage from "../../components/InnerPage";
import WebAndPwa from "./innerpage/WebAndPwa";

const Web = () => {
  return (
    <div>
      <InnerPage
        heading="pwa is the future"
        heading2="of apps"
      />
      <WebAndPwa/>
    </div>
  );
};

export default Web;
