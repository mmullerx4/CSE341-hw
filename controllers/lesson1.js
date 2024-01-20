 //This file is where logic takes place
//const mongodb = require('../db/connect');

const johnRoute = (req, res) => {
  res.send("John Muller");
};

const jacobRoute = (req, res) => {
  res.send("Jacob Muller");
};

 const nathanRoute = (req, res) => {
    res.send("Nathan Muller");
  };



  //export
  module.exports = {
    johnRoute,
    jacobRoute,
    nathanRoute
  }

 