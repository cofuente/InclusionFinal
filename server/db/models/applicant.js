const Sequelize = require('sequelize')
const db = require('../db')

const Applicant = db.define('applicant', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  }
})

module.exports = Applicant
