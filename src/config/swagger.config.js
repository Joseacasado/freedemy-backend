const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('../libs/swagger')

module.exports = app => {
  const swaggerSpec = swaggerJsDoc.init(app)
  app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }))
}
