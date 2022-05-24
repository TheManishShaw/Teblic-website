import React from 'react';
import InnerPage from '../../components/InnerPage';
import PythonContent from './innerpage/PythonContent';
import Head from "next/dist/shared/lib/head";
const Python = () => {
  return (
    <div>
      <Head>
        <title>Python - Tecblic</title>
      </Head>
      <InnerPage heading="THAT STILL REMAINS" heading2="RELEVANT & RELIABLE" />
      <PythonContent />
    </div>
  );
}

export default Python
