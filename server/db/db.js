const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getPersonas
}

function getPersonas (db = connection) {
  return db('personas').select()
}
