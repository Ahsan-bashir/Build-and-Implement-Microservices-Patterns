

//import the require Module

//Post method will post movie in database
router.post('/', async (req, res) => {
        //retreive movie from the req body
        const newMovie = req.body
        //calling SaveMovie on controller layer
        //return result and err
        movieController.saveMovie(newMovie, (err, result) => {
                if (err) {
                        res.status(500).send('Error while saving movie')
                }

                res.status(200).send('Movie saved successfully')

        })
})

////Get method will get specific  movie from database
router.get('/:id', async (req, res) => {


        //retreive movieId from the req.params


        //calling getMovieById on controller layer
        //return result and err

        movieController.getMovieById(movie, movieId, (err, result) => {

        })
})

module.exports = router