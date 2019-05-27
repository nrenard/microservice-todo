const routes = require('express').Router()

const organization = require('./organization')

routes.use('/organization', organization)

module.exports = routes
