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
    // Not sure if this will work just yet
    scopes: {
      populated: () => ({
        include: [{model: db.model('applicant')}]
      })
    }
  }
)

module.exports = Application
