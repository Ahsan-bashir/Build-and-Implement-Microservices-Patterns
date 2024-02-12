const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  
  movieId: { type: String ,unique:true},
  movieName: {type:String},
  yearReleased: { type: String },
  

});

module.exports = mongoose.model("movie", movieSchema);