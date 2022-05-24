import React from "react";
import InnerPage from "../../components/InnerPage";
import ReactContent from "./subpages/ReactContent";
import Head from "next/dist/shared/lib/head";
const Reactjs = () => {
  return (
    <>
      <Head>
        <title>React Js - Tecblic</title>
      </Head>
      <InnerPage heading="LIKE OUR WEBSITE?" heading2="ITS REACT." />
      <ReactContent />
    </>
  );
};

export default Reactjs;
