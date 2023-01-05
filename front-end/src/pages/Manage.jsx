import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import TableManage from '../components/TableManage';
import { getAllUser, excludeUser, createUserAdm } from '../services/userApi';
import { MIN_LENGTH_PASSWORD, EMAIL_REGEX, MIN_LENGTH_FULL_NAME } from '../helpers/const';

export default function Manage() {
  const [users, setUsers] = useState('');
  const [flag, setFlag] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorUser, setErrorUser] = useState(false);

  useEffect(() => {
    const validEmail = EMAIL_REGEX.test(email);
    const validPassword = password.length >= MIN_LENGTH_PASSWORD;
    const validName = name.length >= MIN_LENGTH_FULL_NAME;
    if (validEmail && validPassword && validName) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name, email, password, role]);

  useEffect(() => {
    getAllUser().then((data) => setUsers(data));
  }, [flag]);

  const exclude = async (id) => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const config = {
      headers: { Authorization: token },
    };
    excludeUser(id, config).then(() => setFlag(!flag));
    if (errorUser) setErrorUser(false);
  };

  const createUser = async () => {
    // event.preventDefault();

    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const config = {
        headers: { Authorization: token },
      };
      await createUserAdm({ name, email, password, role }, config);
      if (errorUser) setErrorUser(false);
      setFlag(!flag);
    } catch (error) {
      setErrorUser(true);
      setFlag(!flag);
    }
  };

  return (
    <main>
      <Navbar />
      <form>
        Cadastrar novo usuário
        <label htmlFor="name">
          Nome
          <br />
          <input
            data-testid="admin_manage__input-name"
            type="text"
            placeholder="Nome e sobrenome"
            name="name"
            onChange={ ({ target: { value } }) => setName(value) }
            value={ name }
          />
          <br />
        </label>
        <label htmlFor="email">
          Email
          <br />
          <input
            data-testid="admin_manage__input-email"
            type="email"
            placeholder="seu-email@email.com"
            name="email"
            onChange={ ({ target: { value } }) => setEmail(value) }
            value={ email }
          />
          <br />
        </label>
        <label htmlFor="password">
          Senha
          <br />
          <input
            data-testid="admin_manage__input-password"
            type="password"
            placeholder="******"
            name="password"
            onChange={ ({ target: { value } }) => setPassword(value) }
            value={ password }
          />
          <br />
        </label>
        <label htmlFor="role">
          Tipo
          <br />
          <select
            name="role"
            type="select"
            data-testid="admin_manage__select-role"
            onChange={ ({ target: { value } }) => setRole(value) }
            value={ role }
          >
            <option value="customer">Customer</option>
            <option value="seller">Seller</option>
          </select>
          <br />
        </label>
        <button
          data-testid="admin_manage__button-register"
          type="button"
          disabled={ isDisabled }
          onClick={ () => createUser() }
        >
          Cadastrar
        </button>
        <div data-testid="admin_manage__element-invalid-register">
          {
            errorUser ? <p>Usuário já cadastrado</p> : null
          }
        </div>
      </form>
      <div className="users_table">
        <table className="table_manage">
          { users && users.map((e) => (
            <TableManage exclude={ exclude } key={ Math.random() } { ...e } />
          )) }
        </table>
      </div>
    </main>

  );
}
