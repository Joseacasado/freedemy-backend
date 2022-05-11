module.exports = function languageMiddleware(req, res, next) {
    const headerLanguages = req.headers['accept-language']
    
    req.language = headerLanguages ? req.headers['accept-language'].split(',')[0] : 'en'
    
    return next()
}
  