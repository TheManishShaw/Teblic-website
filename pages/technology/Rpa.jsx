import React from 'react'
import NavBar from '../../components/NavBar';
import InnerPage from '../../components/InnerPage';
import RpaContent from './subpages/RpaContent';
import Footer from '../../components/Footer';
const Rpa = () => {
  return (
    <>
      <NavBar />
      <InnerPage heading="SHOOT UP PRODUCTIVITY" heading2="WITH BOTS" />
      <RpaContent />
      <Footer />
    </>
  );
}

export default Rpa