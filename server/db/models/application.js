const Sequelize = require('sequelize')
const db = require('../db')

const Application = db.define(
  'application',
  {
    status: {
      type: Sequelize.STRING,
      defaultValue: 'UNDER_REVIEW',
      validate: {
        isIn: [['ACCEPTED', 'REJECTED', 'UNDER_REVIEW']]
      }
    }
  },
  {
    scopes: {
      populated: () => ({
        include: [{model: db.model('applicant')}]
      })
    }
  }
)

module.exports = Application
