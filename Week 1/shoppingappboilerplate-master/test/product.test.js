const { expect } = require("chai");
const supertest = require("supertest");

const app = require("../index");


// Mandatory test cases
describe("Testing Product API's Request", function () {

    it("should return status 404 for getting the unknown Product", function (done) {
        const userId = "notauser@gmail.com";
        supertest(app)
            .get("/api/v1/product/" + userId)
            .expect(404)
            .end((err, res) => {
                done(err);
            });
    });

    it("should return status 404 for adding existing Product", function (done) {
        const userId = "notauser@gmail.com";
        const product = {
            productId: "001",
            productName: "Alfa 5",
            productDisc: "Smart bot",
            inStock: true
        };
        supertest(app)
            .post("/api/v1/product/" + userId)
            .expect(404)
            .send(product)
            .end((err, res) => {
                done(err);
            });
    });
})

// Optional test cases
describe("Testing User API's", function () {

    it("should return status 200 for existing user", function (done) {
        const userId = "existinguser@gmail.com";
        supertest(app)
            .get("/api/v1/product/" + userId)
            .expect(200)
            .end((err, res) => {
                done(err);
            });
    });

    it("should return status 200 when product is added sccessfully", function (done) {
        const userId = "existinguser@gmail.com";
        const product = {
            productId: "001",
            productName: "Alfa 5",
            productDisc: "Smart bot",
            inStock: true
        };
        supertest(app)
            .post("/api/v1/product/" + userId)
            .expect(200)
            .send(product)
            .end((err, res) => {
                done(err);
            });
    });
})