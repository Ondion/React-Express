const express = require('express');
const loginController = require('../controllers/loginController');

const routes = express.Router();

routes.post('/login', loginController.getOneUser);

module.exports = routes;
