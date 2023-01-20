const { Router } = require('express')
const { bookController } = require('../controllers/books.controller')

const router = Router()

router.post("/book", bookController.addBook)
router.delete('/book/:id', bookController.deleteBook)
router.patch('/book/:id', bookController.updateBook)
router.get('/book/:id', bookController.getBookId)
router.get('/book', bookController.getBook)
router.get('/book/genre/:id', bookController.getBookGenre)



module.exports = router
