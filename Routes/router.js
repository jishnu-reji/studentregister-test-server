const express = require('express')
const userController = require('../Controllers/userController')

const router = new express.Router()

router.post('/register',userController.register)

router.get('/allUsers',userController.getAllUsers)

module.exports = router