const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.json({ message: 'Freedemy 2.0 API root endpoint.' }))

module.exports = router