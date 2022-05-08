const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    console.log(req.currentUser)
    res.json({ message: 'Jose\'s routres playground.' })
})

module.exports = router