import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Enterprise Application API',
    version: '1.0.0',
    description: 'API documentation for the Enterprise Application',
  },
  servers: [
    {
      url: 'https://api.yourdomain.com',
      description: 'Production server',
    },
    {
      url: 'https://staging-api.yourdomain.com',
      description: 'Staging server',
    }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      }
    }
  },
  security: [{ bearerAuth: [] }],
};

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;