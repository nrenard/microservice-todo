const mongoose = require('mongoose')

const OrganizationSchema = new mongoose.Schema({
  cnpj: {
    type: String,
    required: true
  },
  socialReason: {
    type: String,
    required: true
  },
  nameOfResponsible: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Organization', OrganizationSchema)
