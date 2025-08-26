const User = require('../models/User')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_PASS

// Generate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: '7d',
  })
}

// Register User and sign in
const register = async (req, res) => {

  const { name, email, password } = req.body

  // check if user exists
  const user = await User.findOne({email})

  if(user) {
    res.status(422).json({errors: ['Por favor, utilizar outro E-Mail.']})
    return
  }

  // Generate password hash
  const salt = await bcrypt.genSalt()
  const passwordHash = await bcrypt.hash(password, salt)

  // Create user
  const newUser = await User.create({
    name,
    email,
    password: passwordHash
  })

  // If user was created succesfully, return the token
  if(!newUser) {
    res.status(422).json({errors: ['Ocorreu um erro, tente novamente mais tarde.']})
    return
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id)
  })

}

module.exports = {
  register,
}
