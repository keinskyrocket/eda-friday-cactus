const express = require('express')
const router = express.Router()

// const { personas } = require('../data/personas')

const db = require('../db/db.js')

router.get('/', (req, res) => {
  db.getPersonas()
    .then(name => {
      res.json(name)
      return null
    })
    .catch(err => {
      console.error(err)
    })
})

router.get('/personas', (req, res) => {
  db.getPersonas()
    .then(name => {
      res.json(name)
      return null
    })
    .catch(err => {
      console.error(err)
    })
})
module.exports = router
