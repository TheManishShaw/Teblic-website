import React from 'react';
import NavBar from '../../components/NavBar';
import InnerPage from '../../components/InnerPage';
import Footer from '../../components/Footer';
import HireContent from './innerpage/HireContent';
const Hire = () => {
  return (
    <div>
      <NavBar />
      <InnerPage heading="THAT STILL REMAINS" heading2="RELEVANT & RELIABLE" />
     <HireContent/>
      <Footer />
    </div>
  );
}

export default Hire