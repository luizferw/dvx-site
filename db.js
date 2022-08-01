require('dotenv').config()
const mongoose = require('mongoose')
const dbURI = process.env.MONGO_URL

async function init() {
  return mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
}

module.exports = init
