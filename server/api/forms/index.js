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

router.post('/', async (req, res, next) => {
  try {
    const newForm = await Form.create(req.body)
    res.json(newForm)
  } catch (err) {
    next(err)
  }
})
