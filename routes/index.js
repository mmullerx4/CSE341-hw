
const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.johnRoute);
routes.get('/jacob', lesson1Controller.jacobRoute);
routes.get('/nathan', lesson1Controller.nathanRoute);   

//export routes
module.exports = routes;