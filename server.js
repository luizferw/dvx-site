require('dotenv').config()
const path = require('path')
const db = require('./db')
const adRoutes = require('./routes/adRoutes')
const usersRoutes = require('./routes/usersRoutes')
const http = require('http')
const express = require('express')
const cors = require('cors')

class Server {
  constructor() {
    this.app = express()
    this.httpServer = http.createServer(this.app)
    this.port = process.env.PORT || 4000
  }

  async bootstrap() {
    await db()

    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.static(path.join(__dirname, './client/dist')))
    this.app.use(cors())

    this.app.use('/api/ads', adRoutes)
    this.app.use('/api/users', usersRoutes)
  }

  listen() {
    this.httpServer.listen(this.port, () => {
      console.log(`🚀 Server ready at: http://localhost:${this.port}`)
    })
  }
}

module.exports = Server
