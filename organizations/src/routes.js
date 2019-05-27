const routes = require('express').Router()

routes.get('/', (req, res) =>
  res.json({
    message: 'Chegou'
  })
)

module.exports = routes
