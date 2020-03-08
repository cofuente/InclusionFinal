const router = require('express').Router()
const {Applicant} = require('../../db/models')
module.exports = router

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
