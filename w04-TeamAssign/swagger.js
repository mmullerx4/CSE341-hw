const swaggerAutogen = require('swagger-autogen')();
 
const doc = {
  info: {
    title: 'My API',
    description: 'Temple API',
  },
  host: 'localhost:8080', //would actual url if published
  schemes: ['http'],
};
 
const outputFile = './swagger.json'; //output to
const endpointsFiles = ['./routes/index.js']; //point to routes in router
 
// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);