const express = require('express')
const router = express.Router()
const MarisaController = require('../controllers/marisa.controller')
const Joi = require('joi')
const validator = require('express-joi-validator')

/**
 * @swagger
 * tags:
 *   name: Playlists
 *   description: Marisa Test swagger congifuration
 */
/**
 * @swagger
 * path:
 * /schedules:
 *   get:
 *     summary: List all Playlist
 *     tags: [Playlists]
 *     responses:
 *       200:
 *         description: The list of Playlist
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Playlist'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *
 *   post:
 *     summary: Create new Playlist
 *     tags: [Playlists]
 *     requestBody:
 *         required: true
 *          content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Playlist'
 *     responses:
 *       200:
 *         description: The created Playlist
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Book'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *
 * path:
 * /schedule/{id}:
 *   get:
 *     summary: Get playlist by id
 *     tags: [Playlists]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Playlist id
 *     responses:
 *       200:
 *         description: Returns playlist details
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Playlist'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *
 *   put:
 *     summary: Update a playlist by id
 *     tags: [Playlists]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Playlist id
 *     responses:
 *       204:
 *         description: Update was successful.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Playlist'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 *
 *   delete:
 *     summary: Delete a playlist by id
 *     tags: [Playlists]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Playlist id
 *     responses:
 *       204:
 *         description: Update was successful.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Playlist'
 *       400:
 *         description: Bad request
 *       404:
 *         description: Not found
 */

const events = {
  _id: Joi.string().required(),
  startDate: Joi.date().required(),
  endDate: Joi.date().required()
}

const schedule = {
  description: Joi.string().optional().allow(null),
  tags: Joi.array().items(Joi.string()).optional().allow(null),
  loop: Joi.boolean().required(),
  events: Joi.array().items(events).optional().allow(null)
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
