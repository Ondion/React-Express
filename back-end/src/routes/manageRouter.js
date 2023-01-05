const express = require('express');
const manageController = require('../controllers/manageController');
const middlewares = require('../middlewares');

const routes = express.Router();

routes.get('/manage', manageController.getAllUser);
routes.post('/manage', middlewares.authHandle, manageController.createUser);
routes.post('/manage/:id', middlewares.authHandle, manageController.excludeUser);

module.exports = routes;
