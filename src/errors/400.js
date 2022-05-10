class Error400 extends Error {
    constructor(language, errorMsg) {
        message = errorMsg || 'Bad request.'
        code = 400
    }
}

module.exports = Error400