const router = require('express').Router()
const {Admin} = require('../db/models')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const admin = await Admin.findOne({where: {name: req.body.name}})
    if (!admin) {
      console.log('No such admin found:', req.body.name)
      res.status(401).send('Wrong username and/or password')
    } else if (!admin.correctPassword(req.body.password)) {
      console.log('Incorrect password for admin:', req.body.name)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(admin, err => (err ? next(err) : res.json(admin)))
    }
  } catch (err) {
    next(err)
  }
})

router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})

router.get('/me', (req, res) => {
  res.json(req.admin)
})

router.use('/google', require('./google'))
