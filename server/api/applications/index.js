const router = require('express').Router()
const {Application, Applicant, Form} = require('../../db/models')
module.exports = router

/* Find one individual application by id and bring with it all the relevant Form and applicant info */
router.get('/:applicationId', async (req, res, next) => {
  try {
    const {applicationId} = req.params
    const application = await Application.findById(applicationId)
    res.json(application)
  } catch (err) {
    next(err)
  }
})
