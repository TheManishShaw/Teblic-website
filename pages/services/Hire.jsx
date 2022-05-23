import React from 'react';
import Head from "next/head";
import InnerPage from '../../components/InnerPage';
import HireContent from './innerpage/HireContent';
const Hire = () => {
  return (
    <div>
      <Head>
        <title>Hire Dedicated Resources</title>
      </Head>
      <InnerPage heading="THAT STILL REMAINS" heading2="RELEVANT & RELIABLE" />
      <HireContent />
    </div>
  );
}

export default Hire