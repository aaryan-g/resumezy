const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const multer = require("multer");
const path = require("path");
const app = express.Router();
const fs = require("fs");

// Configure multer to save files to an 'uploads' directory
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.join(__dirname, "uploads");
    fs.mkdirSync(uploadPath, { recursive: true }); // Ensure the directory exists
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json("Invalid username or password");
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json("Invalid username or password");
    }

    res.send(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password with 10 salt rounds

    const newUser = new User({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.send("Registration successful");
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/update", async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.body._id }, req.body);
    const user = await User.findOne({ _id: req.body._id });
    res.send(user);
  } catch (error) {
    res.status(400).json(error);
  }
});

// app.post("/update", upload.single("profileImage"), async (req, res) => {
//   try {
//     // Assuming you want to update the user's profile image URL in the database
//     // You would find the user by their ID and update the profileImage field
//     const userId = req.body._id;
//     const user = await User.findByIdAndUpdate(
//       userId,
//       { profileImage: req.file.path }, // Update the profileImage field with the new file path
//       { new: true }
//     );

//     if (!user) {
//       return res.status(404).json("User not found");
//     }

//     res.send({ message: "Profile updated successfully", user });
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

// app.post("/upload-image", upload.single("profileImage"), async (req, res) => {
//   try {
//     // req.file contains information about the uploaded file
//     // req.body will hold the text fields, if there were any
//     const imagePath = req.file.path; // This is the path where the file is saved

//     // Assuming you want to update the user's profile image URL in the database
//     // You would find the user by their ID and update the profileImage field
//     // For demonstration, let's assume you have the user's ID in req.body._id
//     const userId = req.body._id;
//     const user = await User.findByIdAndUpdate(
//       userId,
//       { profileImage: imagePath },
//       { new: true }
//     );

//     if (!user) {
//       return res.status(404).json("User not found");
//     }

//     res.send({ message: "Image uploaded successfully", user });
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

module.exports = app;
