import React, { useContext } from 'react';
import { AppContext } from '../context/Provider';
import '../css/pages/Products.css';

import Card from '../components/Card';
import ButtonTotalCart from '../components/ButtonTotalCart';
import Navbar from '../components/Navbar';

export default function Products() {
  const { products } = useContext(AppContext);

  return (
    <div className="container-geral-products">
      <Navbar />
      <div className="container-geral-card-products">
        {products.map(({ id, name, price, urlImage }) => (
          <Card
            key={ id }
            id={ id }
            name={ name }
            price={ price }
            urlImage={ urlImage }
          />
        ))}
      </div>
      <ButtonTotalCart />
    </div>
  );
}
