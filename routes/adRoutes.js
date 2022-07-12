const express = require('express')
const adController = require('../controllers/adController')
// const multer = require('multer')

const router = express.Router()

router.get('/', adController.adAll)
router.get('/category/:query', adController.adFilterByCategory)
router.get('/search/:query', adController.adSearch)
router.get('/:id', adController.adDetail)

router.delete('/delete/:id', adController.adDelete)

// const upload = multer({
//   dest: '../client/public/images/',
//   limits: {
//     fileSize: 4 * 1024 * 1024
//   }
// })

// router.post('/upload/:id', upload.single('file'), adController.imageUpload)
router.post('/announce', adController.adPublish)

module.exports = router
