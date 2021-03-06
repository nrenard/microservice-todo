require('dotenv').config()

const express = require('express')
const cors = require('cors')

class Server {
  constructor () {
    this.express = express()

    this.middlewares()
    this.routes()
  }

  middlewares () {
    this.express.use(express.json())
    this.express.use(cors())
  }

  routes () {
    this.express.use(require('./routes'))
  }
}

module.exports = new Server().express
