const mongoose = require("mongoose");
const User = require("../models/studentmodel");
const studentJonSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
  },
  fullName: {
    type: String,
  },
  email: {
    type: String,
  },
  phone_No: {
    type: Number,
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
 
  companies_city: {
    type: String,
  },
 
  totalApplyCompanies: {
    type: String,
  },
  noOfSelectInterview: {
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
});

module.exports = mongoose.model("Job", studentJonSchema);
