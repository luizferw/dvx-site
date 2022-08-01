const express = require('express')
const adController = require('../controllers/adController')

const router = express.Router()

router.get('/', adController.adAll)
router.get('/category/:query', adController.adFilterByCategory)
router.get('/search/:query', adController.adSearch)
router.get('/:id', adController.adDetail)

router.delete('/delete/:id', adController.adDelete)

router.post('/announce', adController.adPublish)

module.exports = router
