const path = require("path");
const express = require("express");
// const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const products = require("./models/product-Data");
const passport = require("passport");

const users = require("./routes/api/users");
// const games = require("./routes/api/games");

const port = process.env.PORT || 5000;

const app = express();
// amira-code
// import auth route
// const authRoute= require("./authRoutes/Auth");
// // Route middelwares
// app.use("api/user",authRoute);

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// ALLOW CORS
const allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(allowCrossDomain);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);



// Routes
// app.get("/api/products", (req, res) => res.json(products));
// app.get("/", (req, res) => res.send("server is running"));


app.listen(port, () => console.log(`Server up and running on port ${port} !`));