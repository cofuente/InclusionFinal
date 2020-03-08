const Admin = require('./Admin')
const Applicant = require('./Applicant')
const Application = require('./Application')
const Comment = require('./Comment')
const Form = require('./Form')

/* ----- Associations Go Here ----- */
Application.belongsTo(Applicant)
Form.hasOne(Applicant)
Comment.belongsTo(Admin)
Application.hasMany(Comment)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {Admin} = require('../db/models')
 * instead of: const Admin = require('../db/models/admin')
 */
module.exports = {
  Admin,
  Applicant,
  Application,
  Comment,
  Form
}
