const mongoose = require("mongoose");
require("dotenv").config();

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("MongoDB connection successful");
});
connection.on("error", (error) => {
  console.log(error);
});
