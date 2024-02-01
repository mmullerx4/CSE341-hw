//connect to express, swagger-ui-express, swagger.json
const router = require('express').Router();
const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json')

router.use('api-docs', swaggerUI.serv);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

module.exports - router;