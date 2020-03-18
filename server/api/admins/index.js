const router = require('express').Router()
const {Admin} = require('../../db/models')
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

/* This is what the signup auth route looked like, will likely emmulate this logic in admin creation */
// router.post('/signup', async (req, res, next) => {
//   try {
//     const admin = await Admin.create(req.body)
//     req.login(admin, err => (err ? next(err) : res.json(admin)))
//   } catch (err) {
//     if (err.name === 'SequelizeUniqueConstraintError') {
//       res.status(401).send('Admin already exists')
//     } else {
//       next(err)
//     }
//   }
// })

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
