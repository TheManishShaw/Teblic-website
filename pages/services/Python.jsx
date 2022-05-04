import React from 'react'
import NavBar from '../../components/NavBar';
import InnerPage from '../../components/InnerPage';
import Footer from '../../components/Footer';
import PythonContent from './innerpage/PythonContent';
const Python = () => {
  return (
    <div>
      <NavBar />
      <InnerPage heading="THAT STILL REMAINS" heading2="RELEVANT & RELIABLE" />
        <PythonContent/>
      <Footer />
    </div>
  );
}

export default Python
