const express = require('express')
const routes = express.Router()

routes.get('/router', (request, response) => {
  response.send('hello')
})

module.exports = routes