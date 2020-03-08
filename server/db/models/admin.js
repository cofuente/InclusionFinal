const crypto = require('crypto')
const Sequelize = require('sequelize')
const db = require('../db')

const Admin = db.define('admin', {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('password')
    }
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue('salt')
    }
  }
})

module.exports = Admin

/**
 * instanceMethods
 */
Admin.prototype.correctPassword = function(candidatePwd) {
  return Admin.encryptPassword(candidatePwd, this.salt()) === this.password()
}

/**
 * classMethods
 */
Admin.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64')
}

Admin.encryptPassword = function(plainText, salt) {
  return crypto
    .createHash('RSA-SHA256')
    .update(plainText)
    .update(salt)
    .digest('hex')
}

/**
 * hooks
 */
const setSaltAndPassword = admin => {
  if (admin.changed('password')) {
    admin.salt = Admin.generateSalt()
    admin.password = Admin.encryptPassword(admin.password(), admin.salt())
  }
}

Admin.beforeCreate(setSaltAndPassword)
Admin.beforeUpdate(setSaltAndPassword)
Admin.beforeBulkCreate(admins => {
  admins.forEach(setSaltAndPassword)
})
