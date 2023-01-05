import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import { AppContext } from '../context/Provider';
import { getSellers, createSale } from '../services/userApi';

export default function FormCheckout() {
  const [sellers, setSellers] = useState([]);
  const [adress, setAdress] = useState('');
  const [adressNumber, setAdressNumber] = useState('');
  const [sellerId, setSellerId] = useState(2);
  const { totalPrice } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    getSellers().then((data) => {
      setSellers(data);
    });
  }, []);

  const clickButon = (e) => {
    e.preventDefault();
    const cart = JSON.parse(localStorage.getItem('cart'));
    const cartFilter = cart.map(({ id, quantity }) => ({
      id,
      quantity,
    }));
    const user = JSON.parse(localStorage.getItem('user'));
    const sale = {
      sellerId,
      totalPrice,
      deliveryAddress: adress,
      deliveryNumber: adressNumber,
      products: cartFilter,
      userId: user.id,
    };
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { Authorization: token },
    };
    createSale(sale, config).then(({ id }) => {
      navigate(`/customer/orders/${id}`);
    });
  };

  return (
    <form>
      <label htmlFor="seller">
        P. Vendedora Response
        <select
          id="seller"
          name="seller"
          data-testid="customer_checkout__select-seller"
          value={ sellerId }
          onChange={ ({ target }) => {
            setSellerId(target.value);
          } }
        >
          {sellers.map(({ id, name }) => (
            <option
              key={ id }
              value={ id }
            >
              {name}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="adress">
        Endereço
        <input
          type="text"
          name="adress"
          id="adress"
          data-testid="customer_checkout__input-address"
          onChange={ ({ target }) => setAdress(target.value) }
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          type="text"
          name="number"
          id="number"
          data-testid="customer_checkout__input-address-number"
          onChange={ ({ target }) => setAdressNumber(target.value) }
        />
      </label>
      <Button
        variant="primary"
        type="bu"
        data-testid="customer_checkout__button-submit-order"
        onClick={ clickButon }
      >
        FINALIZAR PEDIDO
      </Button>
    </form>
  );
}
