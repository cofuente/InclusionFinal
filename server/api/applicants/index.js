const router = require('express').Router()
const {Applicant} = require('../../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const forms = await Applicant.findAll()
    res.json(forms)
  } catch (err) {
    next(err)
  }
})
