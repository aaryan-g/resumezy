const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: {
      type: String,
      default: "",
      // validate: { validator: validator.isEmail, message: "Invalid email" },
    },
    mobileNumber: {
      type: String,
      default: "",
      // validate: {
      //   validator: validator.isMobilePhone,
      //   message: "Invalid mobile number",
      // },
    },

    linkedIn: {
      type: String,
      default: "",
      // validate: { validator: validator.isURL, message: "Invalid URL" },
    },

    github: {
      type: String,
      default: "",
      // validate: { validator: validator.isURL, message: "Invalid URL" },
    },

    portfolio: {
      type: String,
      default: "",
      // validate: { validator: validator.isURL, message: "Invalid URL" },
    },
    careerObjective: { type: String, default: "" },
    address: { type: String, default: "" },
    education: { type: Array, default: [] },
    skills: { type: Array, default: [] },
    certifications: { type: Array, default: [] },
    experience: { type: Array, default: [] },
    projects: { type: Array, default: [] },
    achievements: { type: Array, default: [] },
    interests: { type: Array, default: [] },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
