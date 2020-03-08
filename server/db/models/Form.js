const Sequelize = require('sequelize')
const db = require('../db')

const Form = db.define('form', {
  uniqueFormURL: {
    type: Sequelize.STRING,
    allowNull: false,
    isUnique: true,
    validate: {notEmpty: true}
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
