const router = require('express').Router()
const {Form} = require('../../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const forms = await Form.findAll()
    res.json(forms)
  } catch (err) {
    next(err)
  }
})
