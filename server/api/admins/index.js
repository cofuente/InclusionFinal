const router = require('express').Router()
const {Admin} = require('../../db/models')
module.exports = router

/*  Get all existing Admins */
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

/*  Create a new Admin, will require name and password */
router.post('/', async (req, res, next) => {
  try {
    const newAdmin = await Admin.create(req.body)
    res.json(newAdmin)
  } catch (err) {
    next(err)
  }
})

/*  Delete an Admin, make sure this deletes all their comments */
router.delete('/:adminId', async (req, res, next) => {
  try {
    const {adminId} = req.params
    const admin = await Admin.findByPk(adminId)
    const removeAdmin = await admin.destroy()

    res.status(204).json(removeAdmin)
  } catch (error) {
    next(error)
  }
})
