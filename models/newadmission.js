const mongoose = require("mongoose");
const User = require("../models/studentmodel.js");
const newadmissionSchema = new mongoose.Schema(
  {
    //Personal details
    firstName: {
      type: String,
    },
    lastName: {
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
    domicile: {
      type: String,
    },
    phone_no: {
      type: String,
    },
    aadhar_number: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
    },
    //parent details
    fatherName: {
      type: String,
    },
    motherName: {
      type: String,
    },
    parent_occupation: {
      type: String,
    },
    parent_incomee: {
      type: String,
    },
    parent_phone_no: {
      type: String,
    },
    //Admission details
    examType: {
      type: String,
    },

    counselling: {
      type: String,
    },

    start_session: {
      type: String,
    },
    end_session: {
      type: String,
    },
    application_exam_no: {
      type: String,
    },
    score_rank: {
      type: String,
    },
    course_name: {
      type: String,
    },
    stream: {
      type: String,
    },
    //address details
    village: {
      type: String,
    },
    police_station: {
      type: String,
    },
    districtt: {
      type: String,
    },
    pin_code: {
      type: String,
    },
    state_name: {
      type: String,
    },
    //10th level

    schoolName_10th: {
      type: String,
    },
    roll_No_10th: {
      type: String,
    },
    registration_No_10th: {
      type: String,
    },
    board_Name_10th: {
      type: String,
    },

    year_of_passing_10th: {
      type: String,
    },
    percentage_10th: {
      type: String,
    },
    //12th details

    schoolName_12th: {
      type: String,
    },
    roll_No_12th: {
      type: String,
    },
    registration_No_12th: {
      type: String,
    },
    board_Name_12th: {
      type: String,
    },
    year_of_passing_12th: {
      type: String,
    },

    percentage_12th: {
      type: String,
    },
    //file
    rankcardFile: {
      type: String,
    },
    //document details

    aadhar_card_file: {
      type: String,
    },
    rankcardFile: {
      type: String,
    },

    your_Residence_Certificate: {
      type: String,
    },
    sc_MarksheetFile: {
      type: String,
    },
    hs_MarksheetFile: {
      type: String,
    },

    passport_Photo_Size: {
      type: String,
    },
    signature_or_Thumb: {
      type: String,
    },
    antiragging: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("newadmission", newadmissionSchema);
