class Error400 extends Error {
    constructor(language, errorMsg) {
        const message = errorMsg || 'Bad request.'

        super(message)
        this.code = 400
    }
}

module.exports = Error400