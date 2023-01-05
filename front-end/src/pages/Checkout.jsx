import React from 'react';
import Navbar from '../components/Navbar';

import FormCheckout from '../components/FormCheckout';
import Table from '../components/TableCheckout';

export default function Checkout() {
  return (
    <div>
      <Navbar />
      <Table />
      <FormCheckout />
    </div>
  );
}
