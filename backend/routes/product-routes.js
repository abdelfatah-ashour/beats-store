const Router = require("express").Router();
const {
  createNewProduct,
  getProduct,
  viewOneProduct,
  getOneProduct,
} = require("../controllers/product-controllers");

Router.get("/", getProduct);
Router.get("/viewProduct", viewOneProduct);
Router.get("/getOneProduct", getOneProduct);
Router.post("/create", createNewProduct);

module.exports = Router;
