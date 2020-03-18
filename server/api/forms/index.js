const router = require('express').Router()
const {Form} = require('../../db/models')
module.exports = router

/* Would get all forms, but no functional need for that yet */
// router.get('/', async (req, res, next) => {
//   try {
//     const forms = await Form.findAll()
//     res.json(forms)
//   } catch (err) {
//     next(err)
//   }
// })

/* Get a single form, will require uniqueFormURL, no authorization required 
Make sure to check with Fizal on monday! do we want formId here instead?*/
router.get('/:uniqueFormURL', async (req, res, next) => {
  try {
    const {uniqueFormURL} = req.params
    const form = await Form.findOne({where: {uniqueFormURL}})
    res.json(form)
  } catch (err) {
    next(err)
  }
})

/* UPDATE an individual Form, will require uniqueFormURL, no authorization required */
router.put('/', async (req, res, next) => {
  if (!req.user) {
    res.json({
      status: 'error',
      message:
        'Unauthorized API Request. You must be logged in as an admin to access this data.'
    })
    
  }
  // still requires more logic in here
})

/* Create a new form, will require uniqueFormURL, and cohortId */
router.post('/', async (req, res, next) => {
  if (!req.user) {
    res.json({
      status: 'error',
      message:
        'Unauthorized API Request. You must be logged in as an admin to access this data.'
    })
    return
  }
  try {
    const newForm = await Form.create(req.body)
    res.json(newForm)
  } catch (err) {
    next(err)
  }
})

/* Delete an existing form, will require formId should also delete related applicant and application*/
router.delete('/', async (req, res, next) => {
  if (!req.user) {
    res.json({
      status: 'error',
      message:
        'Unauthorized API Request. You must be logged in as an admin to access this data.'
    })
    
  }
  // still requires more logic in here
})
