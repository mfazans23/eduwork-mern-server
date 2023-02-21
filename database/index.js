const mongoose = require('mongoose')
const { dbHost, dbPass, dbName, dbUser } = require('../app/config')

mongoose.set('strictQuery', false)

const dbURI = `mongodb+srv://${dbUser}:${dbPass}@${dbHost}/${dbName}?retryWrites=true&w=majority`

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

module.exports = db
