import React from 'react'
import Footer from '../../components/Footer';
import InnerPage from '../../components/InnerPage'
import NavBar from '../../components/NavBar';
import OdooContent from './innerpage/OdooContent';

const Odoo = () => {
  return (
    <div>
      <NavBar/>
      <InnerPage heading="think odoo" heading2="think tecblic" />
      <OdooContent/>
      <Footer/>
    </div>
  );
}

export default Odoo;