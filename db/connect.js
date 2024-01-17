const dotenv = require('dotenv');
dotenv.confit();
constMongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
    if (_db) {
        console.lob('Db is already initialized!');
        return callback(null, _db);  
    }
    MongoClient.connect(process.env.MONGODB_URI) 
    .then((client) => {
        _db = client; 
        callback(null, _db);
    })
    .catch((err) => {
        callback(err);
    });
};

const getDb = () => {
    if (!db) {
        throw Error('Db not initialized');
    }
    return _db;
};

module.exports = {
    initDb,
    getDb,
};