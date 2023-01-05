import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {
  MIN_LENGTH_FULL_NAME,
  MIN_LENGTH_PASSWORD,
  EMAIL_REGEX,
} from '../helpers/const';

import { createUser } from '../services/userApi';

export default function Register() {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const navigate = useNavigate();

  return (
    <main>
      <h1>Cadastro</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Seu nome"
            data-testid="common_register__input-name"
            onChange={ ({ target }) => setRegisterName(target.value) }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="seu-email@site.com.br"
            data-testid="common_register__input-email"
            onChange={ ({ target }) => setRegisterEmail(target.value) }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="**********"
            data-testid="common_register__input-password"
            onChange={ ({ target }) => setRegisterPassword(target.value) }
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          data-testid="common_register__button-register"
          disabled={ !(
            registerPassword.length >= MIN_LENGTH_PASSWORD
            && registerName.length >= MIN_LENGTH_FULL_NAME
            && EMAIL_REGEX.test(registerEmail)
          ) }
          onClick={ (e) => {
            e.preventDefault();
            createUser(registerName, registerEmail, registerPassword)
              .then((data) => {
                navigate('/customer/products');
                localStorage.setItem('user', JSON.stringify(data));
              });
          } }
        >
          CADASTRAR
        </Button>

        <Form.Text
          className="text-muted"
          data-testid="common_register__element-invalid_register"
        >
          Elemento oculto (Mensagens de erro)
        </Form.Text>
      </Form>
    </main>
  );
}
