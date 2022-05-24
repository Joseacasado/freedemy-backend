const express = require('express')
const router = express.Router()
const MarisaController = require ('../controllers/marisa.controller')


router.post('/schedule', MarisaController.createPlaylist)
router.get('/schedule/:id', MarisaController.getPlaylistById)

module.exports = router
