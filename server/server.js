const path = require('path')
const express = require('express')
const apiRoutes = require('./routes/apiRoutes')

const server = express()
server.use(express.json())

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/personas', apiRoutes)

module.exports = server
