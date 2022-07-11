require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')
const multer = require('multer')
const fs = require('fs')

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

app.use(cors())

app.use(express.static(path.join(__dirname, '/client/dist')))

const upload = multer({
  dest: './client/public/images/',
  limits: {
    fileSize: 4 * 1024 * 1024
  }
})

app.post('/upload/:id', upload.single('file'), (req, res) => {
  if (req.file) {
    const id = req.params.id
    const ext = req.file.mimetype.split('/')[1]

    fs.rename(
      `./client/public/images/${req.file.filename}`,
      `./client/public/images/${id}.${ext}`,
      e => (e ? console.log(e) : null)
    )

    res.send()
  }

  res.send().status(404)
})

app.use('/api/ads', adRoutes)
app.use('/api/users', usersRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/dist', 'index.html'))
})
