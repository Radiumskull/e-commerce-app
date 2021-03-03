const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index");
const should = chai.should();
chai.use(chaiHttp);

describe("/GET /api/products", () => {
  it("fetching products without mentioning search or catagory", (done) => {
    chai
      .request(app)
      .get("/api/products")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("array");
        // console.log(res.body[0]);
        res.body[0].should.have.property("_id");
        res.body[0].should.have.property("product_id");
        res.body[0].should.have.property("name");
        res.body[0].should.have.property("description");
        res.body[0].should.have.property("category");
        res.body[0].should.have.property("rating");
        res.body[0].should.have.property("price");
        res.body[0].should.have.property("image");
        res.body[0].should.have.property("stock");
        res.body[0].should.have.property("buy_count");
        done();
      });
  });
  it("fetching products mentioning only search query", (done) => {
    chai
      .request(app)
      .get("/api/products?search=MarQ")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("array");
        // console.log(res.body[0]);
        res.body[0].should.have.property("_id");
        res.body[0].should.have.property("product_id");
        res.body[0].should.have.property("name");
        res.body[0].should.have.property("description");
        res.body[0].should.have.property("category");
        res.body[0].should.have.property("rating");
        res.body[0].should.have.property("price");
        res.body[0].should.have.property("image");
        res.body[0].should.have.property("stock");
        res.body[0].should.have.property("buy_count");
        done();
      });
  });
  it("fetching products mentioning only catagory query", (done) => {
    chai
      .request(app)
      .get("/api/products?catagory=airconditioner")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("array");
        // console.log(res.body[0]);
        res.body[0].should.have.property("_id");
        res.body[0].should.have.property("product_id");
        res.body[0].should.have.property("name");
        res.body[0].should.have.property("description");
        res.body[0].should.have.property("category");
        res.body[0].should.have.property("rating");
        res.body[0].should.have.property("price");
        res.body[0].should.have.property("image");
        res.body[0].should.have.property("stock");
        res.body[0].should.have.property("buy_count");
        done();
      });
  });
  it("fetching products mentioning both search query and catagory query", (done) => {
    chai
      .request(app)
      .get("/api/products?search=MarQ&catagory=airconditioner")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("array");
        // console.log(res.body[0]);
        res.body[0].should.have.property("_id");
        res.body[0].should.have.property("product_id");
        res.body[0].should.have.property("name");
        res.body[0].should.have.property("description");
        res.body[0].should.have.property("category");
        res.body[0].should.have.property("rating");
        res.body[0].should.have.property("price");
        res.body[0].should.have.property("image");
        res.body[0].should.have.property("stock");
        res.body[0].should.have.property("buy_count");
        done();
      });
  });
});

describe("/GET /api/products/top", () => {
  it("fetching top products which are bought most", (done) => {
    chai
      .request(app)
      .get("/api/products/top")
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a("array");
        // console.log(res.body[0]);
        res.body[0].should.have.property("_id");
        res.body[0].should.have.property("product_id");
        res.body[0].should.have.property("name");
        res.body[0].should.have.property("description");
        res.body[0].should.have.property("category");
        res.body[0].should.have.property("rating");
        res.body[0].should.have.property("price");
        res.body[0].should.have.property("image");
        res.body[0].should.have.property("stock");
        res.body[0].should.have.property("buy_count");
        done();
      });
  });
});
