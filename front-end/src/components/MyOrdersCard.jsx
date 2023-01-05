import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

export default function MyOrdersCard({
  id,
  status,
  saleDate,
  totalPrice,
  deliveryAddress,
  // sellerId,
}) {
  const getUser = JSON.parse(localStorage.getItem('user'));
  const page = getUser.role === 'seller' ? 'seller' : 'customer';
  const navigate = useNavigate();

  return (
    <button type="button" onClick={ () => navigate(`/${page}/orders/${id}`) }>

      <p data-testid={ `${page}_orders__element-order-id-${id}` }>
        { `pedido ${id}` }
      </p>

      <p data-testid={ `${page}_orders__element-delivery-status-${id}` }>
        { status }
      </p>

      <p data-testid={ `${page}_orders__element-order-date-${id}` }>
        { new Date(saleDate).toLocaleDateString('pt-BR') }
      </p>

      <p data-testid={ `${page}_orders__element-card-price-${id}` }>
        { totalPrice.replace('.', ',') }
      </p>

      {deliveryAddress && (
        <div>
          <p
            data-testid={ `seller_orders__element-card-address-${id}` }
          >
            {deliveryAddress}

          </p>
        </div>
      )}
    </button>
  );
}

MyOrdersCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.string.isRequired,
  totalPrice: PropTypes.string.isRequired,
  // sellerId: PropTypes.number.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
};
