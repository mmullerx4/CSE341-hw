const express = require('express');
const router = require('express').Router();
//const express = require('express');
const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);
 //router.get('/', professionalController.getData);
 router.get('/:id', contactsController.getSingle);
 
//export routes
module.exports = router;