const express = require('express');
const sellerController = require('../controllers/sellerController');

const routes = express.Router();

routes.get('/seller', sellerController.getAllSellersController);

module.exports = routes;
