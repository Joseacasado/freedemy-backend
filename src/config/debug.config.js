const path = require('path')

const appName = require('../../package.json').name
const debug = require('debug')(`${appName}:${path.basename(__filename).split('.')[0]}`)

module.exports = debug
