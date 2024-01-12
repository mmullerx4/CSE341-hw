const express = require('express');
const app = express();

 
app.get('/', (req, res) => {
  res.send("Pam Cottingham");
});

const port = 3000;
 
app.listen(process.env.PORT || 3000, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});

//Hello World
