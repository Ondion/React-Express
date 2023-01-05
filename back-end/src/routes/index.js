const { Router } = require('express');

const routes = Router();

// Faz o import e já chama todas as rotas
routes.use(require('./loginRoute'));
routes.use(require('./registerRoute'));
routes.use(require('./productsRouter'));
routes.use(require('./salesRouter'));
routes.use(require('./sellerRoute'));
routes.use(require('./customerRouter'));
routes.use(require('./manageRouter'));

module.exports = routes;
