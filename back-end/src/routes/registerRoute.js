const express = require('express');
const registerController = require('../controllers/registerController');

const routes = express.Router();

routes.post('/register', registerController.createUser);

module.exports = routes;
