const Sequelize = require('sequelize')
const db = require('../db')

const Applicant = db.define(
  'applicant',
  {
    name: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {notEmpty: true}
    },
    email: {
      // maybe consider making this a get from the associated formId?
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    }
  },
  {
    scopes: {
      populated: () => ({
        include: [{model: db.model('form')}]
      })
    }
  }
)
module.exports = Applicant
