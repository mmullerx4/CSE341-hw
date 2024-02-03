const express = require('express');
const router = express.Router();


router.use('/contacts', require('./contacts'));
router.use('/', require('./swagger'));

//export routes
module.exports = router;