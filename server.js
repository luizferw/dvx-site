const express = require('express')
const path = require('path')
const adRoutes = require('./routes/adRoutes')
const usersRoutes = require('./routes/usersRoutes')
const cors = require('cors')
const MongoDB = require('./db')
const http = require('http')
const db = new MongoDB()

class Server {
  constructor() {
    this.app = express()
    this.httpServer = http.createServer(this.app)
    this.PORT = process.env.PORT || 4000
  }

  async bootstrap() {
    await db.connect()
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.static(path.join(__dirname, './client/dist')))
    this.app.use(cors())

    this.app.use('/api/ads', adRoutes)
    this.app.use('/api/users', usersRoutes)
  }

  listen() {
    this.httpServer.listen(this.PORT, () => {
      // console.log(`Server listening on port ${this.PORT}`)
    })
  }

  async close() {
    await db.disconnect()
    this.httpServer.close()
  }
}

module.exports = Server
