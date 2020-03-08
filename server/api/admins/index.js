const router = require('express').Router()
const {Admin} = require('../../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const admins = await Admin.findAll({
      // explicitly select only the id and name fields - even though
      // admins' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'name']
    })
    res.json(admins)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newAdmin = await Admin.create(req.body)
    res.json(newAdmin)
  } catch (err) {
    next(err)
  }
})
