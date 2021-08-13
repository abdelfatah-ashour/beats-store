const Router = require("express").Router();
const {createOrder, SuccessOrder} = require("../controllers/order-controller");

Router.get("/", (req, res) => {
  res.status(200).json({message: []});
});

Router.post("/create", createOrder);
Router.post("/success", SuccessOrder);
Router.post("/stateOrder", SuccessOrder);

module.exports = Router;
