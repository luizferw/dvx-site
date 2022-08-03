require('dotenv').config()
const mongoose = require('mongoose')
const dbURI = process.env.MONGO_URL

class MongoDB {
  async connect() {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  async disconnect() {
    await mongoose.connection.close()
  }
}

module.exports = MongoDB
