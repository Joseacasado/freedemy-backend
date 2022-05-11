const express = require('express')
const router = express.Router()
const ApiResponseHandler = require('../apiResponseHandler')

const AuthService = require('../../services/auth.service')

router.get('/', async (req, res) => {
    console.log({
        currLang: req.language,
        currUser: req.currentUser
    })
    const payload = { message: 'Jose\'s routres playground.' }

    return await ApiResponseHandler.success(res, payload)
})

router.get('/new-token', async (req, res) => {
    const newToken = AuthService.getUserToken(process.env.TEST_USER_ID)
    
    return await ApiResponseHandler.success(res, newToken)
})
module.exports = router