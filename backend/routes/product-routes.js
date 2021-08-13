const Router = require("express").Router();
const {
  createNewProduct,
  getProduct,
} = require("../controllers/product-controllers");

Router.get("/", getProduct);

Router.post("/create", createNewProduct);

module.exports = Router;
