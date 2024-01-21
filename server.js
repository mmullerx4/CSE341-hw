const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect')


const port = process.env.PORT || 8080;
const app = express();


app.use('/', require('./routes'));
app.use(bodyParser.json())
app.use((req, res, next) => {
    res.setHeader('Acess-Control-Allow-Origin', '*');
    next();
})
app.use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log('Connected to database and listening on ${port}');
    }
});
 
app.listen(process.env.port || port);
console.log('Web Server is listening at port ' + (process.env.port || port));


