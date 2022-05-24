import React from 'react'
import InnerPage from '../../components/InnerPage';
import RpaContent from './subpages/RpaContent';
import Head from "next/dist/shared/lib/head";
const Rpa = () => {
  return (
    <>
      <Head>
        <title>RPA - Tecblic</title>
      </Head>
      <InnerPage heading="SHOOT UP PRODUCTIVITY" heading2="WITH BOTS" />
      <RpaContent />
    </>
  );
}

export default Rpa