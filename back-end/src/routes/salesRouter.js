const express = require('express');
const salesController = require('../controllers/salesController');
const middlewares = require('../middlewares');

const routes = express.Router();

const urlId = '/sales/:id';

routes.get('/sales', salesController.getAllSales);
routes.post('/sales', middlewares.authHandle, salesController.createSale);
routes.get('/sales/orders/:id', salesController.getAllById);
routes.get(urlId, salesController.getSaleById);
routes.put(urlId, salesController.updateSaleStatus);

module.exports = routes;
