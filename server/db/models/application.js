const Sequelize = require('sequelize')
const db = require('../db')

const Applicant = db.define('applicant', {
  status: {
    type: Sequelize.STRING,
    defaultValue: 'UNDER_REVIEW',
    validate: {
      isIn: [['ACCEPTED', 'REJECTED', 'UNDER_REVIEW']]
    }
  }
})

module.exports = Applicant
