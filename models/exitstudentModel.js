const mongoose = require("mongoose");
const User=require('../models/studentmodel')
const exitStudentSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
  },
  firstName: {
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
  rollNo: {
    type: String,
  },
  date_of_birth: {
    type: String,
  },
 
  stream: {
    type: String,
  },
  registrationNo: {
    type: String,
  },
 
  session: {
    type: String,
  },
  Phone_no: {
    type: String,
  },
  
  year_cgpa_1th: {
    type: String,
  },
  year_cgpa_2th: {
    type: String,
  },
  year_cgpa_3rd: {
    type: String,
  },
  year_cgpa_4th: {
    type: String,
  },
  final_cgpa: {
    type: String,
  },
 
});

module.exports = mongoose.model("exitstudent", exitStudentSchema);
