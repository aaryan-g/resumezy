const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express.Router();
app.use(cors());

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

app.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json("Invalid email");
    }

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "resumezy.help@gmail.com",
        pass: "nnnwfwmliwglqbtk",
      },
    });

    var mailOptions = {
      from: "resumezy.help@gmail.com",
      to: email,
      subject: "Reset your Password",
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Password Reset - RESUMEZY</title>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
              }
              .email-container {
                  width: 100%;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #ffffff;
                  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
              }
              .email-header {
                  text-align: center;
                  padding: 20px 0;
                  background-image: linear-gradient(
                    -225deg,
                    #22e1ff 0%,
                    #1d8fe1 48%,
                    #625eb1 100%
                  );
                  color: #ffffff;
              }
              .email-body {
                  padding: 20px;
              }
              .email-footer {
                  text-align: center;
                  padding: 20px 0;
                  border-top: 1px solid #ddd;
                  color: #999;
              }
              .email-footer a {
                  color: #007bff;
                  text-decoration: none;
              }
          </style>
      </head>
      <body>
          <div class="email-container">
              <div class="email-header">
                  <h1>RESUMEZY</h1>
              </div>
              <div class="email-body">
                  <p>Hello,</p>
                  <p>We received a request to reset your password. If you made this request, please click the link below to reset your password:</p>
                  <p><a href="http://localhost:3000/reset-password/${user._id}">Reset Password</a></p>
                  <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
                  <p>Thank you,</p>
                  <p>The RESUMEZY Team</p>
              </div>
              <div class="email-footer">
                  <p>&copy; 2023 RESUMEZY. All rights reserved.</p>
              </div>
          </div>
      </body>
      </html>
      `,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        // console.log("Email sent: " + info.response);
        return res.send(user);
      }
    });
  } catch (error) {
    res.status(400).json(error);
  }
});

app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password with 10 salt rounds

    const newUser = new User({
      email,
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

module.exports = app;
