const express = require('express');
const cors = require('cors');
const middlewares = require('../middlewares');

const app = express();
app.use(cors());
app.use(express.json());

app.use(require('../routes'));

app.use('/images', express.static('public/'));
app.get('/coffee', (_req, res) => res.status(418).end());

app.use(middlewares.errorHandle);

module.exports = app;
