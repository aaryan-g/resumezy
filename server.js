const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");
app.use(express.json()); //So that express can destructure JSON
const port = process.env.PORT || 5000;
const userRoute = require("./routes/userRoute"); //Creating entry point for userRoute
const path = require("path");

//For production
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

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
