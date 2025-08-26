const express = require('express')
const router = express.Router()

// Controller
const { register } = require('../controllers/UserController')

// Middlewares
const validate = require('../middlewares/handleValidation')

// Routes
router.post('/register', validate, register)

module.exports = router
