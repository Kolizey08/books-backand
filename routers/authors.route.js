const { Router } = require('express')
const {authorController} = require('../controllers/authors.controller')

const router = Router()

router.post('/author', authorController.addAuthor)

module.exports = router