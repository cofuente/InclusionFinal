const Admin = require('./admin')
const Applicant = require('./applicant')
// const Application = require('./application')
// const Form = require('./form')
// const Comment = require('./comment')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(Admin)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {Admin} = require('../db/models')
 * instead of: const Admin = require('../db/models/user')
 */
module.exports = {
  Admin,
  Applicant
  // Application,
  // Form,
  // Comment,
}
