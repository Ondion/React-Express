const express = require('express');

const productsController = require('../controllers/productsController');

const routes = express.Router();

const pathId = '/products/:id';

routes.get('/products', productsController.getAllProducts);
routes.post('/products', productsController.createProduct);
routes.get(pathId, productsController.getProductById);
routes.put(pathId, productsController.updateProduct);
routes.delete(pathId, productsController.deleteProduct);

module.exports = routes;
