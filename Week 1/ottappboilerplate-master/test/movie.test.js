const { expect } = require("chai");
const supertest = require("supertest");

const app = require("../index");

// Mandatory test cases
describe("Testing Movie API's request status for get and add functionality ", function () {

    it("should return status 404 error while fetching the movie data if the request is from unkown user", function (done) {
        const userId = "notauser@gmail.com";
        supertest(app)
            .get("/api/v1/movie/" + userId)
            .expect(404)
            .end((err, res) => {
                done(err);
            });
    });
    it("should return status 404 while adding the movie data if request is from unknown user", function (done) {
        const userId = "notauser@gmail.com";
        const movie = {
            movieId: "m001",
            movieName: "Life of Pi",
            yearReleased: "2010"
        };
        supertest(app)
            .post("/api/v1/movie/" + userId)
            .expect(404)
            .send(movie)
            .end((err, res) => {
                done(err);
            });
    });
})

// Optional Test cases
describe("Testing the API request for get and add functionality for user", function () {

    it("should return status 200 for existing user", function (done) {
        const userId = "existinguser@gmail.com";
        supertest(app)
            .get("/api/v1/movie/" + userId)
            .expect(200)
            .end((err, res) => {
                done(err);
            });
    });
    
    it("should return status 200 when product is added sccessfully", function (done) {
        const userId = "existinguser@gmail.com";
        const movie = {
            movieId: "m001",
            movieName: "Life of Pi",
            yearReleased: "2010"
        };
        supertest(app)
            .post("/api/v1/movie/" + userId)
            .expect(200)
            .send(movie)
            .end((err, res) => {
                done(err);
        });
    });
})