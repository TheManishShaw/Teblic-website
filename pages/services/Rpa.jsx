import React from 'react';
import InnerPage from '../../components/InnerPage';
import RpaContent from './innerpage/RpaContent';
import Head from "next/dist/shared/lib/head";
const Rpa = () => {
  return (
    <div>
      <Head>
        <title>RPA - Tecblic</title>
      </Head>
      <InnerPage heading="CUT DOWN ON MUNDANE" heading2="WITH RPA" />
      <RpaContent />
    </div>
  );
}

export default Rpa;