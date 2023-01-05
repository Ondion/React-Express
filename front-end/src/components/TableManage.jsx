import React from 'react';
import PropTypes from 'prop-types';

function TableManage({ name, email, role, id, exclude }) {
  return (
    <>
      <tr>
        <th>
          Item
        </th>
        <th>
          Nome
        </th>
        <th>
          Email
        </th>
        <th>
          Tipo
        </th>
        <th>
          Action
        </th>
      </tr>

      <tr>
        <td>
          <p
            data-testid={ `admin_manage__element-user-table-item-number-${id}` }
          >
            { id}
          </p>
        </td>
        <td>
          <p
            data-testid={ `admin_manage__element-user-table-name-${id}` }
          >
            { name }
          </p>
        </td>
        <td>
          <p
            data-testid={ `admin_manage__element-user-table-email-${id}` }
          >
            { email }
          </p>
        </td>
        <td>
          <p
            data-testid={ `admin_manage__element-user-table-role-${id}` }
          >
            { role }
          </p>
        </td>
        <td>
          <button
            data-testid={ `admin_manage__element-user-table-remove-${id}` }
            type="button"
            onClick={ () => exclude(id) }
          >
            Excluir
          </button>
        </td>
      </tr>
    </>
  );
}

export default TableManage;

TableManage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  exclude: PropTypes.func.isRequired,
};
