require("dotenv").config({
  path: "./config/.env",
});

const express = require("express");
const app = express();
const {ConnectDB} = require("./config/connect-db");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");

// handle all errors
process.on("uncaughtException", error => {
  console.log(`Exception Stack ${error.stack} : ${error.message}`);
});

process.on("rejectionHandled", promise => {
  console.log(`Rejection ${promise}`);
});

// connect DataBase
ConnectDB(process.env.DATABASE_URL);

// cors policy
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// init express
app.use("/", express.static(path.join(__dirname, "./public/images")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(helmet());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// all routes
app.use("/api/v1/auth", require("./routes/user-routes"));
app.use("/api/v1/product", require("./routes/product-routes"));
app.use("/api/v1/order", require("./routes/order-routes"));

app.listen(process.env.PORT, () => {
  console.log(`API works on port ${process.env.PORT}`);
});
