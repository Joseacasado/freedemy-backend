const ApiResponseHandler = require('../apiResponseHandler')
const AuthService = require('../../services/auth.service')

const JoseController = {
    checkConfig: async (req, res) => {
        try {
            console.log({
                currLang: req.language,
                currUser: req.currentUser
            })

            const payload = { message: 'Jose\'s routres playground.' }
        
            return await ApiResponseHandler.success(res, payload)
        } catch (error) {
            return await ApiResponseHandler.error(res, error)
        }
    },
    getNewTestingToken: async (req, res) => {
        try {
            const newToken = AuthService.getUserToken(process.env.TEST_USER_ID) 

            return await ApiResponseHandler.success(res, newToken)
        } catch (error) {
            return await ApiResponseHandler.error(res, error)
        }
    }
}

module.exports = JoseController