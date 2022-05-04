import React from 'react'
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import InnerPage from '../../components/InnerPage';
import PythonContent from './subpages/PythonContent';

const Python = () => {
  return (
    <>
      <NavBar />
      <InnerPage heading="AN ALL-ENCOMPASSING" heading2="SOLUTION" />
      <PythonContent/>
      <Footer />
    </>
  );
}

export default Python;