const mongoose = require('mongoose');

const Schedule = require('../database/models/marisa.model');
const logger = require('../config/winston');

module.exports = {
    createPlaylist: async (req, res) => {
      logger.info(`${__filename} Starting createPlaylist; `);
      try {
        const response = await Schedule.create({
          name: req.body.name,
          description: req.body.description,
        });
        logger.info(`${__filename} createPlaylist schedule created successfully;  name: ${req.body.name}`);
        return response
      } catch (e) {
        logger.error(`${__filename} Error in createPlaylist: ${e}`);
        return e;
      }
    },
    getPlaylistById: async (req, res) => {
      logger.info(`${__filename} Starting getPlaylistById; `);
      try {
        const response = await Schedule.findById(req.params.id);
        logger.info(`${__filename} getPlaylistById successfully; param: ${req.params.id}`);
        return response
      } catch (e) {
        logger.error(`${__filename} Error in getPlaylistById: ${e}`);
        return e;
      }
    },
}