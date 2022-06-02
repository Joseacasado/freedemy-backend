const ApiResponseHandler = require('../apiResponseHandler')
const { version } = require('../../../package.json')

const ApiController = {
  sendRootMessage: async (req, res) => {
    try {
      const payload = { message: 'Freedemy 2.0 API root endpoint.' }

      return await ApiResponseHandler.success(res, payload)
    } catch (error) {
      return await ApiResponseHandler.error(res, error)
    }
  },
  sendApiStatus: async (req, res) => {
    try {
      const payload = { message: 'Awake' }

      return await ApiResponseHandler.success(res, payload)
    } catch (error) {
      return await ApiResponseHandler.error(res, error)
    }
  },
  sendApiVersion: async (req, res) => {
    try {
      const payload = { version }

      return await ApiResponseHandler.success(res, payload)
    } catch (error) {
      return await ApiResponseHandler.error(res, error)
    }
  }
}

module.exports = ApiController
