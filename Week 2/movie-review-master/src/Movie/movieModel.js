const mongoose = require('mongoose')
const movieSchema = mongoose.Schema({
    movieId:{
        type:String,
        require: true  
    },
   movieName :{
        type:String,
        require: true   
    },
    directorName:{
        type:String,
        require: true   
    },
    MovieReview:{
        type:String,
        require: true
    }
})

const movie = mongoose.model('movie',movieSchema)

module.exports = movie