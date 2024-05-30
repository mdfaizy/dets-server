const mongoose = require("mongoose");
const User = require("../models/studentmodel");
const exitStudentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    }, 
    date_of_birth:{
      type: String,
    },
    gender:{
      type: String,
    },
    domicile:{
      type: String,
    },
    phone_no:{
      type:Number,
    },
   
    category:{
      type: String,
    },
  // Parents details
    fatherName: {
      type: String,
    },
    motherName: {
      type: String,
    },
    parentPhoneno:{
      type:Number,
    },
    // collage details
    rollNo: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("exitstudent", exitStudentSchema);
