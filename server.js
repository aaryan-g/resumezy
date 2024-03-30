const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");
app.use(express.json()); //So that express can destructure JSON
const port = process.env.PORT || 5000;
const userRoute = require("./routes/userRoute"); //Creating entry point for userRoute
const path = require("path");
const cors = require("cors");
const User = require("./models/userModel");
const bcrypt = require("bcrypt");

// Enable CORS
app.use(cors());

//For production
if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.post("/reset-password/:id", async (req, res) => {
  console.log("request recieved.");
  const { id } = req.params;
  const { password } = req.body;

  // Hash the password
  bcrypt
    .hash(password, 10)
    .then((hash) => {
      User.findByIdAndUpdate({ _id: id }, { password: hash })
        .then((u) => res.send("Password reset successful"))
        .catch((err) => res.send(err));
    })
    .catch((err) => res.send(err));
  // try {
  // const { id } = req.params;
  // const { password } = req.body;

  // // Hash the password
  // const hashedPassword = await bcrypt.hash(password, 10);

  //   // Update the user's password
  //   await User.findByIdAndUpdate(id, { password: hashedPassword });

  //   // Send success response
  //   res.send("Password reset successful");
  // } catch (error) {
  //   console.log(req.body);
  //   // Log the error for debugging
  //   console.error("Reset password error:", error);
  //   // Send error response
  //   res.status(500).send("Failed to reset password");
  // }
});

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
