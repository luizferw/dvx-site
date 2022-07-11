const express = require('express')
const cors = require('cors')
const multer = require('multer')
const { Storage } = require('@google-cloud/storage')
const mongoose = require('mongoose')
const path = require('path')

const Ads = require('./models/ads')

const adRoutes = require('./routes/adRoutes')
const usersRoutes = require('./routes/usersRoutes')

const app = express()
require('dotenv').config()

const dbURI = process.env.MONGO_URL

const connectDatabase = async () => {
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

connectDatabase()

const multerMid = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
})

// let projectId = 'mineral-order-355019'
// let keyFilename = 'key.json'

// const storage = new Storage({
//   projectId,
//   keyFilename
// })

// const bucket = storage.bucket('')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('/api/ads/category/:query', async (req, res) => {
  try {
    const category = req.params.query

    const filterData = await Ads.find({ sub_category: category })

    res.json(filterData)
  } catch (e) {
    console.log(e)
  }
})

app.use('/api/ads', adRoutes)
app.use('/api/users', usersRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist', 'index.html'))
})
