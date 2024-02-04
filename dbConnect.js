const mongoose = require("mongoose");

const URL =
  "mongodb+srv://avalanche:Ed!th3000@cluster0.aybuv6n.mongodb.net/RESUMEZY";

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
