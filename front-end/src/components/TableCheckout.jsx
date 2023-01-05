import React, { useState, useEffect, useContext } from 'react';

import Button from 'react-bootstrap/Button';

import { AppContext } from '../context/Provider';

export default function Table() {
  const [totalPriceCheckout, setTotalPriceCheckout] = useState(0);
  const { totalPrice, setTotalPrice, cart, setCart } = useContext(AppContext);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
  }, []);

  useEffect(() => {
    setTotalPrice(
      cart.reduce((prev, curr) => (
        prev + (curr.price * curr.quantity)
      ), totalPriceCheckout),
    );
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {
          cart.map(({ id, name, price, quantity }, index) => (
            <tr key={ id }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                {name}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {price.replace('.', ',')}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {(price * quantity).toFixed(2).replace('.', ',')}
              </td>
              <td>
                <Button
                  variant="primary"
                  type="button"
                  data-testid={
                    `customer_checkout__element-order-table-remove-${index}`
                  }
                  onClick={ () => {
                    setCart(
                      cart.filter((item) => (
                        item.name !== name
                      )),
                    );
                    setTotalPriceCheckout(0);
                  } }
                >
                  REMOVER
                </Button>
              </td>
            </tr>
          ))
        }
      </tbody>
      <tfoot>
        <tr>
          <td
            data-testid="customer_checkout__element-order-total-price"
          >
            {`${totalPrice.toFixed(2)}`.replace('.', ',')}
          </td>
        </tr>
      </tfoot>
    </table>
  );
}
