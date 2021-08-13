const Router = require("express").Router();
const {Register, Login, logout} = require("../controllers/user-controller");

Router.post("/register", Register);
Router.post("/login", Login);
Router.get("/logout", logout);

module.exports = Router;
