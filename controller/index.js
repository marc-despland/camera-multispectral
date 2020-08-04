const express = require('express');
var openapi = require('express-openapi');
const swaggerUi = require('swagger-ui-express');

var StatusService = require('./api/services/statusService');

const app = express();

openapi.initialize({
  app,
  // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
  // apiDoc: './api-v1/api-doc.yml',
  apiDoc: './api/api-doc.yml',
  consumesMiddleware: {
    'application/json': express.json()
  },
  dependencies: {
    statusService: StatusService
  },
  paths: './api/paths',
  securityHandlers: {
    XAuthToken: function (req, scopes, definition) {
      if ((req.headers.hasOwnProperty("x-auth-token")) && (req.headers["x-auth-token"] === "camera")) {
        return true;
      } else {
        return false;
      }
    }
  },
  errorMiddleware: function (err, req, res, next) {
    console.log(JSON.stringify(err, null, 4))
    if ((err.hasOwnProperty("status")) && (err.hasOwnProperty("message"))) {
      res.status(err.status).send(err.message);
    } else {
      res.status(500).send(err);
    }
  }
});
//test
var options = {
  swaggerOptions: {
    url: '/api/api-docs'
  }
}



app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, options));
app.listen(8080, "0.0.0.0");
