const jwt = require('jsonwebtoken')
const { decryptText } = require('../utils/crypto.utils')

module.exports = {
    areEqualPass: (hashedPass, incomingPass) => decryptText(hashedPass) === incomingPass,
    getUserToken: (id, remember) => {
        const expiresIn = remember ? process.env.AUTH_JWT_EXPIRES_IN_REMEMBER : process.env.AUTH_JWT_EXPIRES_IN
        return jwt.sign({ id }, process.env.AUTH_JWT_SECRET, { expiresIn })
    },
    getUserIdFromToken: async token => {
        const userId = jwt.verify(token, process.env.AUTH_JWT_SECRET, (err, decoded) => decoded ? decoded.id : err)
        if (typeof userId !== 'string') return { errorMsg: 'Expired token.' }

        return userId
    },
    verifyToken: headers => {
        const bearerHeader = headers['authorization']
        if (!bearerHeader) return { errorMsg: 'Token not found.' }
        
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
    
        return bearerToken
    }
}