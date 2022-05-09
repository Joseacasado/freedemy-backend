const ApiResponseHandler = {
    success: async (res, payload) => {
        if (payload !== undefined) return res.status(200).json(payload)
        
        return res.sendStatus(200)
    },
    error: async (res, error) => {
        console.error(error)

        if (error && [400, 401, 403, 404].includes(error.code)) {
            return res.status(error.code).json(error.message)
        }
        
        return res.status(500).json(error.message)
    }
}

module.exports = ApiResponseHandler