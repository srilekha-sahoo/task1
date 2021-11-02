const express = require("express");
const logger = require('morgan');
const routes = require('./routes/index.js');
const bodyParser = require('body-parser');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');
const app = express();
const port = 3000;


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
require('./routes/index.js')(app)


app.use(bodyParser.json());


app.use('/api/v1.0/employees', routes);

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});