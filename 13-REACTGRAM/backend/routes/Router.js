const express = require('express')
const router = express()

// test route
router.get('/', (req, res) => {
  res.send("Olá, mundo!")
})

module.exports = router