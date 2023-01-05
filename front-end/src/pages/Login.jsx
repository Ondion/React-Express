import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { MIN_LENGTH_PASSWORD, EMAIL_REGEX } from '../helpers/const';
import { createPost } from '../services/userApi';

function Login() {
  const [password, setPassword] = useState('');
  const [loginEmail, setloginEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user'));
    if (data) {
      if (data.role === 'administrator') {
        navigate('/admin/manage');
      } else if (data.role === 'customer') {
        navigate('/customer/products');
      } else if (data.role === 'seller') {
        navigate('/seller/orders');
      }
    }
  }, []);

  function handleClick(e) {
    e.preventDefault();
    createPost(loginEmail, password)
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data));
        // const user = JSON.parse(localStorage.getItem('user'));
        if (data.role === 'administrator') {
          navigate('/admin/manage');
        } else if (data.role === 'customer') {
          navigate('/customer/products');
        } else if (data.role === 'seller') {
          navigate('/seller/orders');
        }
      });
    // verifica a role do usuário e redireciona para a página correta
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Login</Form.Label>
        <Form.Control
          type="email"
          placeholder="email@trybeer.com.br"
          data-testid="common_login__input-email"
          onChange={ ({ target }) => setloginEmail(target.value) }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control
          type="password"
          placeholder="**********"
          data-testid="common_login__input-password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        data-testid="common_login__button-login"
        disabled={ !(
          password.length >= MIN_LENGTH_PASSWORD
          && EMAIL_REGEX.test(loginEmail)
        ) }
        onClick={ (e) => handleClick(e) }
      >
        Login
      </Button>

      <Button
        variant="primary"
        type="submit"
        data-testid="common_login__button-register"
        onClick={ () => navigate('/register') }
      >
        Ainda não tenho conta
      </Button>

      <Form.Text
        className="text-muted"
        data-testid="common_login__element-invalid-email"
      >
        Elemento oculto (Mensagens de erro)
      </Form.Text>
    </Form>
  );
}

export default Login;
