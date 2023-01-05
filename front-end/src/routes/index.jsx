import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Login from '../pages/Login';
import Products from '../pages/Products';
import Register from '../pages/Register';
import MyOrders from '../pages/MyOrders';
import Checkout from '../pages/Checkout';
import OrderDetails from '../pages/OrderDetails';
import Manage from '../pages/Manage';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/products" element={ <Products /> } />
        <Route path="/customer/orders" element={ <MyOrders /> } />
        <Route path="/customer/orders/:id" element={ <OrderDetails /> } />
        <Route path="/customer/checkout" element={ <Checkout /> } />
        <Route path="/seller/orders" element={ <MyOrders /> } />
        <Route path="/seller/orders/:id" element={ <OrderDetails /> } />
        <Route path="/admin/manage" element={ <Manage /> } />
        <Route path="/" element={ <Navigate to="/login" /> } />
        <Route path="*" element={ <Navigate to="/login" /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
