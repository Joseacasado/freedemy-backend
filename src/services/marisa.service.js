const Schedule = require('../database/models/marisa.model')
const logger = require('../config/winston.config')

module.exports = {
  createPlaylist: async (req, res) => {
    logger.info(`${__filename} Starting createPlaylist with body ${JSON.stringify(req.body)};`)
    try {
      const response = await Schedule.create({
        name: req.body.name,
        description: req.body.description,
        tags: req.body.tags,
        loop: req.body.loop,
        events: req.body.events
      })
      logger.info(`${__filename} playlist with name: ${req.body.name} created successfully;`)
      return response
    } catch (e) {
      logger.error(`${__filename} Error in createPlaylist: ${e}`)
      return e
    }
  },
  updatePlaylist: async (req, res) => {
    logger.info(`${__filename} Starting updatePlaylist; playlist Id:  ${req.params.id}, ${JSON.stringify(req.body)};`)
    try {
      const response = await Schedule.findOneAndUpdate({
        description: req.body.description,
        tags: req.body.tags,
        loop: req.body.loop,
        events: req.body.events
      })
      logger.info(`${__filename} playlist with id: ${req.params.id} updated successfully;`)
      return response
    } catch (e) {
      logger.error(`${__filename} Error in updatePlaylist: ${e}`)
      return e
    }
  },
  getPlaylistById: async (req, res) => {
    logger.info(`${__filename} Starting getPlaylistById; `)
    try {
      const response = await Schedule.findById(req.params.id)
      logger.info(`${__filename} getPlaylistById successfully; param: ${req.params.id}`)
      return response
    } catch (e) {
      logger.error(`${__filename} Error in getPlaylistById: ${e}`)
      return e
    }
  }
}
