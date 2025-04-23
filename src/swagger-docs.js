const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'Air Quality',

    version: '1.0.0',

    description: 'air quality apis'
  },

  host: 'localhost:3000'
};

const options = {
  swaggerDefinition,

  apis: ['./src/docs/**/*.yaml']
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
