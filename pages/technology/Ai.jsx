import React from 'react';
import InnerPage from '../../components/InnerPage';
import AiContent from './subpages/AiContent'
import Head from "next/dist/shared/lib/head";
const Ai = () => {
  return (
    <>
      <Head>
        <title>AI - Tecblic</title>
      </Head>
      <InnerPage heading="UNLOCK FUTURE" heading2="NOW" />
      <AiContent />
    </>
  );
}

export default Ai;