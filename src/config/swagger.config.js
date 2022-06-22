const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../documentation/openapi.json')

module.exports = app => {
  if (String(process.env.API_DOCUMENTATION_ENABLED) !== 'true') {
    return
  }

  const swaggerUiOptions = {
    explorer: true
  }

  app.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerUiOptions))
}
