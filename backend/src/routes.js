const express = require('express');

const SessionController = require('./controllers/SessionController');
const RegisterController = require('./controllers/RegisterController');
const DashboardController = require('./controllers/DashboardController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/register', RegisterController.index);
routes.post('/register', RegisterController.store);

routes.get('/dashboard', DashboardController.show);

module.exports = routes;