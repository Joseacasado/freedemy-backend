// const swaggerUi = require('swagger-ui-express')
// const swaggerJsDoc = require('../../libs/swagger')

module.exports = app => {
  // const swaggerSpec = swaggerJsDoc.init(app)
  app.use('/jose', require('./jose.routes'))
  app.use('/marisa', require('./marisa.routes'))
  app.use('/api', require('./api.routes'))
  // app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
}
