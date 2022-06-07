require('dotenv').config()

// DDBB
require('./config/mongoose.config')

// Debug
require('./config/debug.config')

// App
const express = require('express')
const app = express()

// App settings
require('./config/cors.config')(app)
require('./config/middleware.config')(app)

// Routes index
require('./api/routes')(app)

module.exports = app
