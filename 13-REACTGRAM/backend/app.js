require('dotenv').config()

const express = require('express')
const path = require('path')
const cors = require('cors')

const port = process.env.PORT

const app = express()

// Config JSON and form data
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
const router = require('./routes/Router')

app.use(router)

app.listen(port, () => {
  console.log(`App rodando na porta ${port}!`)
})
