import React from 'react';
import InnerPage from "../../components/InnerPage";
import GolangContent from './subpages/GolangContent';
import Head from "next/dist/shared/lib/head";
const Golang = () =>{
    return (
      <>
        
        <Head>
          <title>Golang - Tecblic</title>
        </Head>
        <InnerPage heading="SIMPLE YET POWERFUL" />
        <GolangContent />
      </>
    );
  

}

export default Golang;