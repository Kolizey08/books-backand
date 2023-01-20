const Genre = require('../models/Genre.model')

module.exports.genreController = {
    addGenre: (req, res)=> {
        Genre.create({
            name: req.body.name,
            text: req.body.text
        }).then((data)=> {
            res.json(data)
        }).catch(()=> res.json('error'))
    },
    deleteGenre: (req, res)=> {
        Genre.findByIdAndDelete(req.params.id).then(()=> {
            res.json('жанр удален')
        }).catch(()=> res.json('error'))
    },
    getGenre: (req, res) => {
        Genre.find().then((data)=> {
            res.json(data)
        }).catch(()=> res.json('error'))
    }
}