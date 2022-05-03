const mongoose = require('mongoose')

const connectionURL = process.env.NODE_ENV === 'production' ? process.env.DB_REMOTE_PROD : process.env.DB_REMOTE_DEV

mongoose
    .connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0]?.name}"`))
    .catch(error => console.error('Error connecting to mongo', error))

module.exports = mongoose