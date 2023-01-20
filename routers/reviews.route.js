const { Router } = require('express')
const { reviewController } = require('../controllers/reviews.controller')

const router = Router()

router.post('/review', reviewController.addReview)
router.delete('/review/:id', reviewController.deleteReview)
router.get('/review/book/:id', reviewController.getReviewBook)

module.exports = router
