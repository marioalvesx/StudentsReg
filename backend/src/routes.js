const express = require('express');

const SessionController = require('./controllers/SessionController');
const RegisterController = require('./controllers/RegisterController');
const DashboardController = require('./controllers/DashboardController');
const CheckpointController = require('./controllers/CheckpointController');

const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/register', RegisterController.index);
routes.post('/register', RegisterController.store);

routes.get('/dashboard', DashboardController.show);

routes.post('/register/:register_id/checkpoint', CheckpointController.store);    // Cria o checkpoint de um ESTUDANTE registrado, usando o seu ID

module.exports = routes;