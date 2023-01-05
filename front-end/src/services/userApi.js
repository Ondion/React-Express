import axios from 'axios';

const baseUrlLogin = 'http://localhost:3001/login';
const baseUrlRegister = 'http://localhost:3001/register';
const baseUrlProducts = 'http://localhost:3001/products';
const baseUrlSellers = 'http://localhost:3001/seller';
const baseUrlSales = 'http://localhost:3001/sales';
const baseUrlManage = 'http://localhost:3001/manage';

export const createPost = (email, password) => axios.post(baseUrlLogin, {
  email,
  password,
}).then(({ data }) => data);

export const createUser = (name, email, password) => axios.post(baseUrlRegister, {
  name,
  email,
  password,
}).then(({ data }) => data);

export const getProducts = () => axios.get(baseUrlProducts)
  .then(({ data }) => data);

export const getSellers = () => axios.get(baseUrlSellers)
  .then(({ data }) => data);

export const getSales = (id) => axios.get(`${baseUrlSales}/orders/${id}`)
  .then(({ data }) => data);

export const getSalesById = (id) => axios.get(`${baseUrlSales}/${id}`)
  .then(({ data }) => data);

export const updateSaleStatus = (id, status) => axios.put(`${baseUrlSales}/${id}`, {
  status,
}).then(({ data }) => data);

export const createSale = (sale, token) => axios.post(baseUrlSales, sale, token)
  .then(({ data }) => data);

export const getAllSales = () => axios.get(baseUrlSales)
  .then(({ data }) => data);

export const getAllUser = () => axios.get(baseUrlManage)
  .then(({ data }) => data);

export const excludeUser = (id, headers) => axios.post(
  `${baseUrlManage}/${id}`,
  {},
  headers,
).then((data) => data);

export const createUserAdm = (user, headers) => axios
  .post(`${baseUrlManage}`, user, headers)
  .then((data) => data);
