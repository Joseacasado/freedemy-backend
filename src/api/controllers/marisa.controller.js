const ApiResponseHandler = require("../apiResponseHandler");
const MarisaService = require('../../services/marisa.service')

const MarisaController = {
  createPlaylist: async (req, res) => {
    try {
      const newPlaylist = MarisaService.createPlaylist(req);
      return await ApiResponseHandler.success(res, newPlaylist);
    } catch (error) {
      return await ApiResponseHandler.error(res, error);
    }
  },
  getPlaylistById: async (req, res) => {
    try {
      const foundPlaylist = MarisaService.getPlaylistById(req);
      return await ApiResponseHandler.success(res, foundPlaylist);
    } catch (error) {
      return await ApiResponseHandler.error(res, error);
    }
  },
};

module.exports = MarisaController;
