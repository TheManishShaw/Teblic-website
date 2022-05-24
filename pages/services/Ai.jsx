import React from "react";
import InnerPage from "../../components/InnerPage";
import AiContent from "./innerpage/AiContent";
import Head from "next/dist/shared/lib/head";

const Ai = () => {
  return (
    <div>
      <Head>
        <title>AI - Tecblic</title>
      </Head>
      <InnerPage
        heading="EXPLORE POSSIBILITIES"
        heading2="ARTIFICIAL INTELLIGENCE"
      />
      <AiContent />
    </div>
  );
};

export default Ai;
