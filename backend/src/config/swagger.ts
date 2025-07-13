import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Smart Service CRM API',
      version: '1.0.0',
      description: 'Auto-generated API documentation using Swagger',
    },
    servers: [
      {
        url: 'http://localhost:5000/api', // change for prod
      },
    ],
  },
  apis: ['src/routes/*.ts'], // Where your route files live
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
