const express = require('express');
const SessionController = require('./controllers/SessionController');
const RegisterController = require('./controllers/RegisterController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.post('/register', RegisterController.store);

module.exports = routes;