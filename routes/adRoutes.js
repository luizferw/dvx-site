const express = require('express')
const adController = require('../controllers/adController')

const router = express.Router()

router.get('/', adController.adAll)
router.get('/category/:query', adController.adFilterByCategory)
router.get('/:id', adController.adDetail)
router.get('/delete/:id', adController.adDelete)

router.post('/announce', adController.adPublish)

module.exports = router
