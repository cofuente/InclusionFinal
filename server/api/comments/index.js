const router = require('express').Router()
const {Comment} = require('../../db/models')
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

/* Get all comments on an Application*/

/* Update am individual Comment, will require all comment fields */

/* Create a new Comment, will require adminId and applicationId on the body*/
router.post('/', async (req, res, next) => {
  try {
    const newComment = await Comment.create(req.body)
    res.json(newComment)
  } catch (err) {
    next(err)
  }
})

/* Delete an existing comment, will require just the commentId */
