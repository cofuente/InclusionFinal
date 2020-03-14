const router = require('express').Router()
const {Comment} = require('../../db/models')
module.exports = router

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
