import React from "react";
import InnerPage from "../../components/InnerPage";
import DjangoContent from "./subpages/DjangoContent";
import Head from "next/dist/shared/lib/head";
const Django = () => {
  return (
    <>
      <Head>
        <title>Django - Tecblic</title>
      </Head>
      <InnerPage heading="SCALE BUSINESS SECURELY" heading2="WITH DJANGO" />
      <DjangoContent />
    </>
  );
};

export default Django;
