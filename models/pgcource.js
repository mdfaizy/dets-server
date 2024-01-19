const mongoose = require("mongoose");
const User=require("../models/studentmodel")

const pgStudentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
  },
  fristName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  fatherName: {
    type: String,
  },
  motherName: {
    type: String,
  },
  email: {
    type: String,
  },
  date_of_birth: {
    type: String,
  },
  gender: {
    type: String,
  },
  category: {
    type: String,
  },
  allIndiaRank: {
    type: String,
  },
  stream: {
    type: String,
  },
  session: {
    type: String,
  },
  exameType: {
    type: String,
  },
  InstituteName: {
    type: String,
  },
  cource: {
    type: String,
  },
  InstituteCity: {
    type: String,
  },
  categoryRank: {
    type: String,
  },
});

module.exports = mongoose.model("Pgcourses", pgStudentSchema);
