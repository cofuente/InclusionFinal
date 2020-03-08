const Sequelize = require('sequelize')
const db = require('../db')

const Comment = db.define('comment', {
  text: {
    type: Sequelize.TEXT,
    validate: {
      notEmpty: true,
      isAlphanumeric: true // will only allow alphanumeric characters, so "_abc" will fail
    }
  }
})

module.exports = Comment
