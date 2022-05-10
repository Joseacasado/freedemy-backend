const express = require('express')
const router = express.Router()
const ApiResponseHandler = require('../apiResponseHandler')

router.get('/', async (req, res) => {
    console.log({
        currLang: req.language,
        currUser: req.currentUser
    })
    const payload = { message: 'Jose\'s routres playground.' }

    return await ApiResponseHandler.success(res, payload)
})

module.exports = router