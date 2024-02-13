const sinon = require("sinon");
const movieService = require("../src/Movie/movieService");

describe("Test movie service", () => {
  it("should save movie and return that object", (done) => {
    let movie = {
     movieId: 2,
      movieName: "Shawshank Redemption",
      directorName: "Franklin",
      MovieReview: "Good",
    };
    var create = sinon.stub(movieService, "saveMovie");
    movieService.saveMovie(movie, (err, results) => {});
    sinon.assert.calledOnceWithMatch(create, movie);
    done();
    create.restore();
  });
  it("should return movie given the movie id", (done) => {
    var findById = sinon.stub(movieService, "getMovieById");
    movieService.getMovieById((err, results) => {});
    sinon.assert.calledOnce(findById);
    done();
    findById.restore();
  });
});