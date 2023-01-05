import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import MyOrdersCard from '../components/MyOrdersCard';
import { getSales, getAllSales } from '../services/userApi';

export default function MyOrders() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [orderCustomer, setOrderCustomer] = useState(null);
  const [orderSeller, setOrderSeller] = useState(null);

  useEffect(() => {
    getSales(user.id).then((data) => {
      if (user.role === 'customer') {
        setOrderCustomer(data);
      }
    });
    getAllSales().then((data) => {
      if (user.role === 'seller') {
        setOrderSeller(data);
      }
    });
  }, []);

  return (
    <div>
      <Navbar />
      {orderCustomer
        && orderCustomer.map((e) => <MyOrdersCard key={ Math.random() } { ...e } />)}
      {orderSeller
        && orderSeller.map((e) => <MyOrdersCard key={ Math.random() } { ...e } />)}
    </div>
  );
}
