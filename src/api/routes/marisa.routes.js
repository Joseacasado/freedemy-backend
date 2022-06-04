const express = require('express')
const router = express.Router()
const MarisaController = require('../controllers/marisa.controller')
const Joi = require('joi');
const validator = require('express-joi-validator');

const events = {
  _id: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
}

const schedule = {
  description: Joi.string().optional().allow(null),
  tags: Joi.array().items(Joi.string()).optional().allow(null),
  loop: Joi.boolean().required(),
  events: Joi.array().items(events).optional().allow(null),
}

const updatePlaylist = {
  body: {
    ...schedule
  }
}

const createPlaylist = {
  body: {
    name: Joi.string().required(),
    ...schedule
  }
}

router.post('/schedule', validator(createPlaylist), MarisaController.createPlaylist)
router.put('/schedule/:id', validator(updatePlaylist), MarisaController.updatePlaylist)
router.get('/schedule/:id', MarisaController.getPlaylistById)

module.exports = router
