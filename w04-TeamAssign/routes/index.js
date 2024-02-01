const express = require('express').Router();
const templeRoutes = require('./temple');
const swaggerRoutes = require('./swagger');
 
express.use('/temples', templeRoutes);
express.use('/swagger', swaggerRoutes);
express.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: 'https://github.com/mmullerx4/CSE341-hw/tree/main/w04-TeamAssign',
    };
    res.send(docData);
  })
);
 
module.exports = express;
