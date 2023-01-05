import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { AppContext } from '../context/Provider';

export default function Card({ id, name, price, urlImage }) {
  const [quantity, setQuantity] = useState(0);
  const { cart, setCart, setTotalCart } = useContext(AppContext);

  useEffect(() => {
    const verifyCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart([...verifyCart, { id, name, price, urlImage, quantity }]);
    setQuantity(verifyCart.find((item) => item.id === id)?.quantity || 0);
    setTotalCart(verifyCart.reduce(
      (acc, curr) => acc + (curr.price * curr.quantity),
      0,
    ));
  }, []);

  // useEffect a cada mudança de quantidade ou de cart (adicionar ou remover) atualiza o total do carrinho e salva no localStorage o cart
  useEffect(() => {
    const product = cart.find((item) => item.id === id);
    if (product) {
      product.quantity = quantity;
    }
    // se o produto não estiver no carrinho, adiciona ele com a quantidade atual
    if (!product && quantity > 0) {
      cart.push({ id, name, price, urlImage, quantity });
    }
    // se a quantidade for 0, remove o produto do carrinho
    if (quantity === 0) {
      const newCart = cart.filter((item) => item.id !== id);
      setCart(newCart);
    }
    // se o carrinho estiver vazio, seta o totalCart para 0
    if (cart.length === 0) {
      setTotalCart(0);
    }
    // se o carrinho não estiver vazio, soma o total do carrinho
    if (cart.length > 0) {
      const sum = cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0,
      );
      setTotalCart(sum);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [quantity]);

  return (
    <div className="container-geral-card-product">
      <h6 data-testid={ `customer_products__element-card-price-${id}` }>
        {price.replace('.', ',')}
      </h6>
      <img
        width={ 10 }
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <h6 data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </h6>
      <InputGroup className="mb-3">
        <Button
          variant="outline-secondary"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => {
            if (quantity > 0) {
              setQuantity(quantity - 1);
            }
          } }
        >
          -
        </Button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          // type="number"
          name="quantity"
          value={ quantity }
          min="0"
          onChange={ ({ target }) => {
            setQuantity(Number(target.value));
          } }
        />
        <Button
          variant="outline-secondary"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => {
            setQuantity(quantity + 1);
          } }
        >
          +
        </Button>
      </InputGroup>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
};
