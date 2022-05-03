import React from 'react'
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import InnerPage from '../../components/InnerPage';
import RpaContent from './innerpage/RpaContent';
const Rpa = () => {
  return (
    <div>
      <NavBar />
      <InnerPage heading="CUT DOWN ON MUNDANE" heading2="WITH RPA" />
      <RpaContent/>
      <Footer />
    </div>
  );
}

export default Rpa;