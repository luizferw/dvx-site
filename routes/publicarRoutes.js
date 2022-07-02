const express = require('express')
const publicarController = require('../controllers/publicarController')
const router = express.Router()

router.post('/', publicarController.publicarPost)

module.exports = router
