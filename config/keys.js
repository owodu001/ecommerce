module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/our_store",
  secretOrKey: "secret"
};

console.log("################# >>>>>>>>>>", process.env.MONGODB_URI)
