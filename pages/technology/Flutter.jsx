 import React from 'react'
 import NavBar from'../../components/NavBar';
  import Footer from "../../components/Footer";
import InnerPage from '../../components/InnerPage';
  import FlutterContent from "./subpages/FlutterContent"
 const Flutter = () => {
   return (
     <>
       <NavBar />
       <InnerPage heading="BUILD APPS FOR FUTURE," heading2="TODAY" />
       <FlutterContent />
       <Footer />
     </>
   );
 }
 
 export default Flutter