const express = require('express')
const anuncioController = require('../controllers/anuncioController')

const router = express.Router()

router.get('/:id', anuncioController.adDetail)
router.get('/delete/:id', anuncioController.adDelete)

module.exports = router
