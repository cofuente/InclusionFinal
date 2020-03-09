const router = require('express').Router()
const {Applicant} = require('../../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const applicants = await Applicant.findAll()
    res.json(applicants)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newApplicant = await Applicant.create(req.body)
    res.json(newApplicant)
  } catch (err) {
    next(err)
  }
})
