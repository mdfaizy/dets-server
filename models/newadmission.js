const mongoose = require("mongoose");
const User = require("../models/studentmodel.js");
const newadmissionSchema = mongoose.Schema({
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
  date_of_birth: {
    type: String,
  
  },
  application_exam_no: {
    type: String,
  
  },
  examType: {
    type: String,
  
  },
  scoure_rank: {
    type: String,
  
  },
  cource_name: {
    type: String,
  
  },
  stream: {
    type: String,
  
  },
  phone_no: {
    type: String,
  
  },
  category: {
    type: String,
  
  },
//10th level
  
  schoolName_10th: {
    type: String,
  
  },
  roll_No_10th: {
    type: String,
  
  },
  regisration_No_10th: {
    type: String,
  
  },
  board_Name_10th: {
    type: String,
  
  },

  year_of_passing_10th: {
    type: String,
  
  },
  persentage_10th: {
    type: String,
  
  },
 

  schoolName_12th: {
    type: String,
  
  },
  roll_No_12th: {
    type: String,
  
  },

  regisration_No_12th: {
    type: String,
  
  },
  board_Name_12th: {
    type: String,
  
  },

  year_of_passing_12th: {
    type: String,
  
  },

  persentage_12th: {
    type: String,
  
  },
//file
  rankcardFile: {
    type: String,
  
  },
  aadhar_card_file: {
    type: String,
  },
  your_Residence_Certificate: {
    type: String,
  
  },

  passport_Photo_Size: {
    type: String,
  
  },
 
  signature_or_Thumb: {
    type: String,
  
  },
  sc_MarksheetFile: {
    type: String,
  
  },
  hs_MarksheetFile: {
    type: String,
  
  },
  antiragging: {
    type: String,
  
  }, 
});

module.exports = mongoose.model("newadmission", newadmissionSchema);
