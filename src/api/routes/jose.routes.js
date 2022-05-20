const express = require('express')
const router = express.Router()
const JoseController = require('../controllers/jose.controller')

router.get('/', JoseController.checkConfig)
router.get('/new-token', JoseController.getNewTestingToken)


module.exports = router