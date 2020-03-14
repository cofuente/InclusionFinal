const router = require('express').Router()
const {Applicant} = require('../../db/models')
module.exports = router

/* Get all Applicants */
router.get('/', async (req, res, next) => {
  try {
    const applicants = await Applicant.findAll({
      attributes: ['name']
    })
    res.json(applicants)
  } catch (err) {
    next(err)
  }
})

/* Get a single Applicant, will require applicantId and get relevant form and application info (if application info exists */
router.get('/:applicantId', async (req, res, next) => {
  try {
    const {applicantId} = req.params
    const applicant = await Applicant.findByPk(applicantId)
    res.json(applicant)
  } catch (err) {
    next(err)
  }
})

/* Create a new Applicant, will require form Id */

router.post('/', async (req, res, next) => {
  try {
    const newApplicant = await Applicant.create(req.body)
    res.json(newApplicant)
  } catch (err) {
    next(err)
  }
})

/*  Delete an Applicant, will require applicantId, should also delete Application and related Form */
