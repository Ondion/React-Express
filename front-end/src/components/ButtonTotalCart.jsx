import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { AppContext } from '../context/Provider';

export default function ButtonTotalCart() {
  const { totalCart, setTotalCart } = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    const verifyCart = JSON.parse(localStorage.getItem('cart')) || [];

    const sum = verifyCart.reduce(
      (acc, curr) => acc + (curr.price * curr.quantity),
      0,
    );
    setTotalCart(sum);
  }, []);

  return (
    <div className="container-geral-button-page-products">
      <Button
        data-testid="customer_products__button-cart"
        variant="success"
        type="button"
        disabled={ totalCart === 0 }
        onClick={ () => navigate('/customer/checkout') }
      >
        <Button data-testid="customer_products__checkout-bottom-value">
          {`R$ ${totalCart.toFixed(2).replace('.', ',')}`}
        </Button>

      </Button>
    </div>
  );
}
