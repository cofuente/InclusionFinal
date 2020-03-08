const Admin = require('./Admin')
const Applicant = require('./Applicant')
const Application = require('./Application')
const Comment = require('./Comment')
const Form = require('./Form')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(Admin)
 */
Application.belongsTo(Applicant)
// Form.hasOne(Applicant)
Comment.belongsTo(Admin)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {Admin} = require('../db/models')
 * instead of: const Admin = require('../db/models/user')
 */
module.exports = {
  Admin,
  Applicant,
  Application,
  Comment,
  Form
}
