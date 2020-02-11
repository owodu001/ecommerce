const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const TestProdList = require("./models/product-Data");

// const passport = require("passport");

const productsRT = require("./routes/api/product-routes");
const customersRT = require("./routes/api/users-routes");
const ordersRT = require("./routes/api/order-routes");
// const games = require("./routes/api/games");

const port = process.env.PORT || 5000;

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// ALLOW CORS to allows access from cross domain to get API info
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
  .then(() => {
    console.log("MongoDB successfully connected")
  })
  .catch(err => console.log(err));





// Routes
app.get("/api/productsTest", (req, res) => res.json(TestProdList));
app.get("/api/productsTest/:id", (req, res) => {
  for (const p of TestProdList) {
    if (p.id === req.params.id) {
      return res.json(p);
    }
  }
  res.json(TestProdList);
});
app.get("/", (req, res) => res.send("server is running"));
app.use("/api/products", productsRT);
app.use("/api/users", customersRT);
app.use("/api/orders", ordersRT);


app.listen(port, () => console.log(`Server up and running on port ${port} !`));