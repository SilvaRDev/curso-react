const express = require('express')
const router = express.Router()

// Controller
const { InsertPhoto } = require('../controllers/PhotoController')

// Middlewares
const { photoInsertValidation } = require('../middlewares/PhotoValidation')
const authGuard = require('../middlewares/authGuard')
const validate = require('../middlewares/handleValidation')
const { imageUpload } = require('../middlewares/imageUpload')

// Routes
router.post(
  '/',
  authGuard,
  imageUpload.single('image'),
  photoInsertValidation(),
  validate,
  InsertPhoto
)

module.exports = router
