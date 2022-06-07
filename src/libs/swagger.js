'use strict'
const swaggerJSDoc = require('swagger-jsdoc')

const options = {
  swaggerDefinition: {
    info: {
      title: 'Freedemy',
      version: 2.0
    },
    responses: {
      200: {
        description: 'Bad request. User ID must be an integer and larger than 0.'
      },
      400: {
        description: 'Authorization information is missing or invalid.'
      }

    }
    // securityDefinitions: {
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
  },

  apis: ['./api/routes/*.js'] // Path to the API docs

}

module.exports = {

  init: (app) => {
    const swaggerSpec = swaggerJSDoc(options)

    app.get('/api-doc.json', (req, res) => {
      res.setHeader('Content-Type', 'application/json')
      res.send(swaggerSpec)
    })

    return swaggerSpec
  }

}
