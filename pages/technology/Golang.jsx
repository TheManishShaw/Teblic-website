import React from 'react';
import NavBar from '../../components/NavBar';
import Footer from "../../components/Footer";
import InnerPage from "../../components/InnerPage";
import GolangContent from './subpages/GolangContent';
const Golang = () =>{
    return (
      <>
        <NavBar />
        <InnerPage heading="SIMPLE YET POWERFUL" />
        <GolangContent/>
        <Footer />
      </>
    );
  

}

export default Golang;