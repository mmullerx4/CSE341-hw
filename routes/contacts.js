const routes = require('express').Router();
//const express = require('express');
const contactsController = require('../controllers/contacts');

routes.get('/', contactsController.getData);
 //router.get('/', professionalController.getData);

 
//export routes
module.exports = routes;