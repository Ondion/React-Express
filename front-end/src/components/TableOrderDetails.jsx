import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import '../css/components/TableOrderDetails.css';
import { getSalesById, updateSaleStatus } from '../services/userApi';

export default function TableOrderDetails() {
  const [salesOrder, setSalesOrder] = useState([]);
  const [role, setRole] = useState('user');
  const { id } = useParams();

  useEffect(() => {
    getSalesById(id).then((data) => {
      setSalesOrder(data);
    });
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setRole(user.role);
    }
  }, []);

  const updateStatus = (saleId, status) => {
    updateSaleStatus(saleId, status).then(() => {
      getSalesById(id).then((response) => {
        setSalesOrder(response);
      });
    });
  };

  console.log('salesOrder', salesOrder.status);

  return (
    <div className="container-master-table-order-details">
      {salesOrder.user && (
        <div className="container-geral-table-order-details">
          <div>
            <h2
              data-testid={
                `${role}_order_details__element-order-details-label-order-id`
              }
            >
              Pedido
              {' '}
              {salesOrder.id}
            </h2>
            <p
              data-testid={
                `${role}_order_details__element-order-details-label-seller-name`
              }
            >
              {salesOrder.seller.name}
            </p>
            <p
              data-testid={
                `${role}_order_details__element-order-details-label-order-date`
              }
            >
              {/* https://willianjusten.com.br/formatando-datas-com-js-puro */}
              {new Intl.DateTimeFormat('pt-BR').format(
                new Date(salesOrder.saleDate),
              )}
            </p>
            <p
              data-testid={
                `${role}_order_details__element-order-details-label-delivery-status`
              }
            >
              {salesOrder.status}
            </p>
            <div>
              {role === 'customer' && (
                <button
                  data-testid="customer_order_details__button-delivery-check"
                  type="button"
                  disabled={
                    salesOrder.status !== 'Em Trânsito'
                  }
                  onClick={ (e) => {
                    e.preventDefault();
                    updateStatus(salesOrder.id, 'Entregue');
                    // window.location.reload();
                  } }
                >
                  Marcar como entregue
                </button>
              )}
            </div>
            <div>
              {role === 'seller' && (
                <button
                  data-testid="seller_order_details__button-preparing-check"
                  type="button"
                  disabled={ salesOrder.status !== 'Pendente' }
                  onClick={ () => {
                    updateStatus(salesOrder.id, 'Preparando pedido');
                    // window.location.reload();
                  } }
                >
                  Preparando pedido
                </button>
              )}
            </div>
            <div>
              {role === 'seller' && (
                <button
                  data-testid="seller_order_details__button-dispatch-check"
                  type="button"
                  disabled={ salesOrder.status !== 'Preparando pedido' }
                  onClick={ () => {
                    updateStatus(salesOrder.id, 'Em Trânsito');
                    // window.location.reload();
                  } }
                >
                  Saiu para entrega
                </button>
              )}
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Descrição</th>
                <th>Quantidade</th>
                <th>Valor Unitário</th>
                <th>Sub-total</th>
              </tr>
            </thead>
            <tbody>
              {salesOrder.products?.map((item, index) => (
                <tr key={ item.id }>
                  <td
                    data-testid={
                      `${role}_order_details__element-order-table-item-number-${index}`
                    }
                  >
                    {item.id}
                  </td>
                  <td
                    data-testid={
                      `${role}_order_details__element-order-table-name-${index}`
                    }
                  >
                    {item.name}
                  </td>
                  <td
                    data-testid={
                      `${role}_order_details__element-order-table-quantity-${index}`
                    }
                  >
                    {item.SalesProduct.quantity}
                  </td>
                  <td
                    data-testid={
                      `${role}_order_details__element-order-table-unit-price-${index}`
                    }
                  >
                    {item.price}
                  </td>
                  <td
                    data-testid={
                      `${role}_order_details__element-order-table-sub-total-${index}`
                    }
                  >
                    {item.price * item.SalesProduct.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td
                  data-testid={ `${role}_order_details__element-order-total-price` }
                >
                  {salesOrder.totalPrice.replace('.', ',')}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </div>
  );
}
