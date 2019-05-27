const routes = require('express').Router()
const axios = require('axios')

const api = axios.create({ baseURL: process.env.ORGANIZATION_URL })

routes.get('/', async (req, res) => {
  const { data } = await api.get('/')

  return res.json(data)
})

module.exports = routes
