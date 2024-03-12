const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");
app.use(express.json()); //So that express can destructure JSON
const port = 5000;
const userRoute = require("./routes/userRoute"); //Creating entry point for userRoute
const path = require("path");
const cors = require("cors");

app.use(cors());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//Navigating API to userRoute
app.use("/api/user/", userRoute);

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
