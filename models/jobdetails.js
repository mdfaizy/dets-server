const mongoose = require("mongoose");
const User = require("../models/studentmodel");
const studentJonSchema = new mongoose.Schema({

  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
 
  phone_No: {
    type: Number,
  },
  father_Name: {
    type: String,
  },
  date_of_birth:{
    type: String,
  },
  gender: {
    type: String,
  },
  categorie: {
    type: String,
  },
  
  home_city: {
    type: String,

  },
  companies_name: {
    type: String,
  },
  selectType: {
    type: String,
  },
  totalApplyCompanies: {
    type: String,
  },
  noOfSelectInterview: {
    type: String,
  },
  companies_city: {
    type: String,
  },
  package_lpa: {
    type: String,
  },
  job_role: {
    type: String,
  },
  
 
  
  companiesType: {
    type: String,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User
  },
},
{ timestamps: true },
);

module.exports = mongoose.model("Job", studentJonSchema);





