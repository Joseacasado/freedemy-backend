const ApiResponseHandler = require('../apiResponseHandler')
const MarisaService = require('../../services/marisa.service')

const MarisaController = {
  createPlaylist: async (req, res) => {
    try {
      const newPlaylist = await MarisaService.createPlaylist(req)
      return await ApiResponseHandler.success(res, newPlaylist)
    } catch (error) {
      return await ApiResponseHandler.error(res, error)
    }
  },
  updatePlaylist:  async (req, res) => {
    try {
      const updatedPlaylist = await MarisaService.updatePlaylist(req)
      return await ApiResponseHandler.success(res, updatedPlaylist)
    } catch (error) {
      return await ApiResponseHandler.error(res, error)
    }
  },
  getPlaylistById: async (req, res) => {
    try {
      const foundPlaylist = await MarisaService.getPlaylistById(req)
      return await ApiResponseHandler.success(res, foundPlaylist)
    } catch (error) {
      return await ApiResponseHandler.error(res, error)
    } 
  }
}

module.exports = MarisaController
