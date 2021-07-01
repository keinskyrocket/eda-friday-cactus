const express = require('express')
const router = express.Router()

const { personas } = require('../data/personas')

router.get('/', (req, res) => {
  res.json(personas)
})

router.get('/details', (req, res) => {
  res.json(personas).filter((persona) => persona.name)
})
module.exports = router
