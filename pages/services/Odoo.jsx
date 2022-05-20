import React from 'react';
import InnerPage from '../../components/InnerPage';
import OdooContent from './innerpage/OdooContent';

const Odoo = () => {
  return (
    <div>
      <InnerPage heading="think odoo" heading2="think tecblic" />
      <OdooContent/>
    </div>
  );
}

export default Odoo;