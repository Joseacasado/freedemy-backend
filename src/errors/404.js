class Error404 extends Error {
  constructor (language, errorMsg) {
    const message = errorMsg || 'Not found.'

    super(message)
    this.code = 404
  }
}

module.exports = Error404
