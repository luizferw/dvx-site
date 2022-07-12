const express = require('express')
const usersController = require('../controllers/usersController')

const router = express.Router()

router.get('/', usersController.usersAll)
router.get('/:id', usersController.getUserById)
router.get('/author/:username', usersController.getUserByUsername)

router.post('/register', usersController.registerUser)

module.exports = router
