const express = require('express');
const customerController = require('../controllers/customerController');

const routes = express.Router();

routes.get('/customer/:id', customerController.findOne);

module.exports = routes;
