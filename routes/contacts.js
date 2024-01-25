const express = require('express');
const router = express.Router();
//const express = require('express');
const contactsController = require('../controllers/contacts');

router.get('/', contactsController.getAll);
 //router.get('/', professionalController.getData);
router.get('/:id', contactsController.getSingle);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

 
//export routes
module.exports = router;