const router = require('express').Router()
const {Application, Applicant, Form} = require('../../db/models')
module.exports = router

/* Route Authorization */
router.use((req, res, next) => {
  let error
  if (!req.user) {
    error = new Error(
      'Unauthorized API Request. You must be logged in as an admin to access this data.'
    )
    error.status = 401
  }
  next(error)
})

/* Get a single application, will require applicationId */
router.get('/:applicationId', async (req, res, next) => {
  try {
    const {applicationId} = req.params
    const application = await Application.findByPk(applicationId)
    res.json(application)
  } catch (err) {
    next(err)
  }
})

/* Create a new application, will require applicantId */

/* Delete an application, will require applicationId should also delete related applicant and form*/
