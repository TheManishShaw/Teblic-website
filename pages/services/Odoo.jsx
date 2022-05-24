import React from 'react';
import Head from "next/dist/shared/lib/head";
import InnerPage from '../../components/InnerPage';
import OdooContent from './innerpage/OdooContent';

const Odoo = () => {
  return (
    <div>
      <Head>
        <title>Odoo - Tecblic</title>
      </Head>
      <InnerPage heading="think odoo" heading2="think tecblic" />
      <OdooContent />
    </div>
  );
}

export default Odoo;