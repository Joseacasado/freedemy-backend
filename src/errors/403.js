class Error403 extends Error {
    constructor(language, errorMsg) {
        const message = errorMsg || 'Not authorized.'

        super(message)
        this.code = 403
    }
}

module.exports = Error403