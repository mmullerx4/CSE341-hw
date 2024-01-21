//This file is where logic takes place
const mongodb = require('../db/connect');
const objectID = require('mongodb').objectId;

const getAll = async (req, res, next) => {
  const result = await mongodb.getDB().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json'); //response header indicates JSON
    res.status(200).json(lists); //sends JSON response
  });
};
  
const getSingle = async (req, res, next) => {
  const userId = new objectID(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};
  
  
    module.exports = { getAll, getSingle
    };