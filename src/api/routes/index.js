module.exports = app => {
    app.use('/jose', require('./jose.routes'))
    app.use('/marisa', require('./marisa.routes'))
    app.use('/api', require('./api.routes'))
}