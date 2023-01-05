import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

export default function NavbarAll() {
  const [userName, setUserName] = useState('user');
  const [role, setRole] = useState('user');
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserName(user.name);
      setRole(user.role);
    }
  }, []);

  return (
    <Navbar bg="dark" variant="dark">
      <div>
        <Container
          onClick={ (e) => {
            e.preventDefault();
            if (role === 'customer') {
              navigate('/customer/products');
            } else if (role === 'seller') {
              navigate('/seller/orders');
            } else if (role === 'administrator') {
              navigate('/admin/manage');
            }
          } }
        >
          <Navbar.Brand
            data-testid={ `${role}_products__element-navbar-link-products` }
          >
            {role === 'customer' && 'PRODUTOS'}
            {role === 'seller' && 'PEDIDOS'}
            {role === 'administrator' && 'GERENCIAR USUÁRIOS'}
          </Navbar.Brand>
        </Container>
      </div>
      <div>
        {role !== 'administrator' && (
          <Container
            onClick={ (e) => {
              e.preventDefault();
              navigate(role === 'customer' ? '/customer/orders' : '/seller/orders');
            } }
          >
            <Navbar.Brand data-testid="customer_products__element-navbar-link-orders">
              MEUS PEDIDOS
            </Navbar.Brand>
          </Container>
        )}
      </div>

      <Container>
        <Navbar.Brand
          data-testid={ `${role}_products__element-navbar-user-full-name` }
        >
          {userName}
        </Navbar.Brand>
      </Container>
      <Container
        onClick={ () => {
          localStorage.clear();
          navigate('/login');
        } }
      >
        <Navbar.Brand data-testid="customer_products__element-navbar-link-logout">
          Sair
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
