class Error401 extends Error {
  constructor (language, errorMsg) {
    const message = errorMsg || 'Authentication error.'

    super(message)
    this.code = 401
  }
}

module.exports = Error401
