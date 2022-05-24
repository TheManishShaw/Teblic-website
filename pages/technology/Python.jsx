import React from 'react'
import InnerPage from '../../components/InnerPage';
import PythonContent from './subpages/PythonContent';
import Head from "next/dist/shared/lib/head";
const Python = () => {
  return (
    <>
      <Head>
        <title>Python - Tecblic</title>
      </Head>
      <InnerPage heading="AN ALL-ENCOMPASSING" heading2="SOLUTION" />
      <PythonContent />
    </>
  );
}

export default Python;