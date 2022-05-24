const cookieParser = require('cookie-parser')
const logger = require('morgan')
const express = require('express')
const helmet = require('helmet')
const languageMiddleware = require('../middlewares/language.middleware')
const tokenMiddleware = require('../middlewares/token.middleware')
const { rateLimiter } = require('../api/apiRateLimiter')

module.exports = app => {
  app.use(logger('dev'))
  app.use(cookieParser())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  // Sets the current language of the request
  app.use(languageMiddleware)

  // Configures the authentication middleware
  // Verifies token if exists and set the currentUser to the requests
  app.use(tokenMiddleware)

  // Default rate limiter
  app.use(rateLimiter)

  // Enables Helmet, a set of tools to
  // increase security.
  app.use(helmet())
}
