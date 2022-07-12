require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const mongoose = require('mongoose')

const adRoutes = require('./routes/adRoutes')
const usersRoutes = require('./routes/usersRoutes')

const app = express()

const dbURI = process.env.MONGO_URL

const connectToDatabase = async () => {
  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(process.env.PORT || 4000)
  } catch (err) {
    console.log(err)
  }
}

connectToDatabase()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// app.use(express.static(path.join(__dirname, '/client/dist')))

app.use(cors())

app.use('/api/ads', adRoutes)
app.use('/api/users', usersRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist', 'index.html'))
})
