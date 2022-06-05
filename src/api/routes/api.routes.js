const express = require('express')
const router = express.Router()
const ApiController = require('../controllers/api.controller')

router.get('/', ApiController.sendRootMessage)
router.get('/health', ApiController.sendApiStatus)
router.get('/version', ApiController.sendApiVersion)

module.exports = router
