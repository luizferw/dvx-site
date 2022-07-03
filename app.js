const express = require('express')
const cors = require('cors')
const multer = require('multer')
const dotenv = require('dotenv')
const { Storage } = require('@google-cloud/storage')
const mongoose = require('mongoose')
const indexGet = require('./controllers/indexController')
const anuncioRoutes = require('./routes/anuncioRoutes')
const publicarRoutes = require('./routes/publicarRoutes')
const {
  registerUser,
  listUsers,
  getUser
} = require('./controllers/registerController')
const path = require('path')

const app = express()

dotenv.config()

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

app.use(express.static(path.join(__dirname, '/olx-clone-front/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/olx-clone-front/dist', 'index.html'))
})

app.use('/api/ads', anuncioRoutes)
app.use('/api/announce', publicarRoutes)
app.post('/api/register', registerUser)
app.get('/api/users', listUsers)
app.get('/api/users/:id', getUser)

app.post('/api/upload', multerMid.single('file'), async (req, res) => {
  try {
    if (req.file) {
      const blob = bucket.file(req.file.originalname)
      const blobStream = blob.createWriteStream()

      blobStream.on('finish', () => {
        res.status(200).send('success')
      })
      console.log(req.file)
    }
  } catch {}
})

app.use('/api/', indexGet)
