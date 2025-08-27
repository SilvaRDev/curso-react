const Photo = require('../models/Photo')
const User = require('../models/User')

const mongoose = require('mongoose')

// Insert a photo, with a user releated to it
const InsertPhoto = async (req, res) => {
  const { title } = req.body
  const image = req.file.filename

  const reqUser = req.user 

  const user = await User.findById(reqUser._id)

  // Create a photo
  const newPhoto = await Photo.create({
    image,
    title,
    userId: user._id,
    userName: user.name
  })

  // If photo was created succesfully, return data
  if(!newPhoto) {

    res.status(422).json({
      errors: ['Houve um problema, por favor tente novamente mais tarde.']
    })

  }

  res.status(201).json(newPhoto)
}

module.exports = {
  InsertPhoto,
}
