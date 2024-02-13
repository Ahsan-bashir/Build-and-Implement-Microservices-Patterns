  

  const mongoose = require('mongoose');

  const movieReviewSchema = mongoose.Schema({
   
      userId: {
        
        type: mongoose.SchemaTypes.ObjectId,
        require: true
      },
     
      movieId: {
        type: mongoose.SchemaTypes.ObjectId,
        require: true
      }
  })
  

 
  const movieReview = mongoose.model("movieReview", movieReviewSchema);

  module.exports = movieReview;

  