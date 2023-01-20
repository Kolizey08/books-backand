const Author = require('../models/Author.model')

module.exports.authorController = {
    addAuthor: (req, res)=> {
        Author.create({
            name: req.body.name,
            text: req.body.text
        }).then((data)=> {
            res.json(data)
        }).catch(()=> res.json('error'))
    }
}