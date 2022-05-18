const cookieParser = require('cookie-parser')
const logger = require('morgan')
const express = require('express')
const helmet = require('helmet')
const languageMiddleware = require('../middlewares/language.middleware')
const tokenMiddleware = require('../middlewares/token.middleware')
const defaultRateLimiter = require('../api/apiRateLimiter')

module.exports = app => {
    app.use(logger('dev'))
    app.use(cookieParser())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(languageMiddleware)
    app.use(tokenMiddleware)
    app.use(defaultRateLimiter)
    app.use(helmet())
}