const express = require('express')
const usersController = require('../controllers/usersController')

const router = express.Router()

router.get('/', usersController.usersAll)
router.get('/:id', usersController.getUser)
router.get('/register', usersController.registerUser)

module.exports = router
