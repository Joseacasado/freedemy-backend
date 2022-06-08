
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Freedemy',
      version: 2.0,
      description: 'This is a simple CRUD API application made with Express and documented with Swagger'
    },
    // securityDefinitions: {   //if it is not an OpenApi
    //   access_token: {
    //     type: 'apiKey',
    //     name: 'x-access-token',
    //     in: 'header'
    //   }
    // },
    // security: [
    //   {
    //     access_token: []
    //   }
    // ]
    servers: [
      {
        url: 'http://localhost:5050/marisa'
      }
    ]

  },

  apis: ['./api/routes/*.js'] // Path to the API docs

}
const specs = swaggerJsdoc(options)
module.exports = app => {
  app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(specs, { explorer: true }))
}
