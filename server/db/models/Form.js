const Sequelize = require('sequelize')
const db = require('../db')

const Form = db.define('form', {
  uniqueFormURL: {
    type: Sequelize.STRING,
    allowNull: false,
    isUnique: true,
    validate: {notEmpty: true}
  },
  cohortId: {
    // is an integer where the first 2 numbers indicate the year and the last 2 are either the spring or fall. covers up to year 2022
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 2002,
    validate: {
      notEmpty: true,
      isIn: [[2002, 2010, 2102, 2110, 2202, 2210]]
    }
  },
  textInput: {
    // should probably update this to whatever field we decide corresponds on the front end
    type: Sequelize.STRING,
    allowNull: true
  },
  textArea: {
    // should probably update this to whatever field we decide corresponds on the front end
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {notEmpty: true}
  },
  checkBox: {
    // should probably update this to whatever field we decide corresponds on the front end, maybe like 'by checking this box I verify all is true, etc'
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  date: {
    // should probably update this to whatever field we decide corresponds on the front end
    type: Sequelize.DATEONLY,
    allowNull: true
  }
})

module.exports = Form
