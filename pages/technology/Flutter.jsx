 import React from 'react'
import InnerPage from '../../components/InnerPage';
  import FlutterContent from "./subpages/FlutterContent"
import Head from "next/dist/shared/lib/head";
 const Flutter = () => {
   return (
     <>
       <Head>
         <title>Flutter - Tecblic</title>
       </Head>
       <InnerPage heading="BUILD APPS FOR FUTURE," heading2="TODAY" />
       <FlutterContent />
     </>
   );
 }
 
 export default Flutter