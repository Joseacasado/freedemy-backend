const User = require('../database/models/user.model')
const { getUserIdFromToken } = require('../services/auth.service')
const ApiResponseHandler = require('../api/apiResponseHandler')


/**
 * Authenticates and fills the request with the user if it exists.
 * If no token is passed, it continues the request but without filling the currentUser.
 */

module.exports = async function tokenMiddleware(req, res, next) {
    const isTokenEmpty = (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) && !(req.cookies && req.cookies.__session)

    if (isTokenEmpty) return next()

    let bearerToken

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
        // Read the ID Token from the Authorization header.
        bearerToken = req.headers.authorization.split('Bearer ')[1]
    } else if (req.cookies) {
        // Read the ID Token from cookie.
        bearerToken = req.cookies.__session
    } else {
        return next()
    }

    try {
        const currentUserId = await getUserIdFromToken(bearerToken)
        if (currentUserId.errorMsg) return res.status(400).json(currentUserId)

        const currentUser = await User.findById(currentUserId)

        req.currentUser = currentUser

        return next()
    } catch (error) {
        console.error(error)
        return await ApiResponseHandler.error(res, { code: 500, message: error.message })
    }
}