//This file is where logic takes place
const mongodb = require('../db/connect');
const ObjectID = require('mongodb').ObjectId;

let contacts = [];

const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json'); //response header indicates JSON
    res.status(200).json(lists); //sends JSON response
  });
};
  
const getSingle = async (req, res, next) => {
  const userId = new ObjectID(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts')
  .find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

//app.post('/contact', (req, res) => {
  //const contact = req.body;
  //console.log(contact);
  //contacts.push(contact);
  //res.send('contact is added to the database');
//});
  
  
    module.exports = { getAll, getSingle
    };