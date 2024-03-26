const exitstudent = require("../models/exitstudentModel.js");
const User = require("../models/studentmodel.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const EmailDetails = require("../service/EmailDetails.js");

const emailService = new EmailDetails();
exports.exitStudent = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      fatherName,
      motherName,
      date_of_birth,
      email,
      registrationNo,
      Phone_no,
      rollNo,
      session,
      stream,
      year_cgpa_1th,
      year_cgpa_2nd,
      year_cgpa_3rd,
      year_cgpa_4th,
      final_cgpa,
      token,
    } = req.body;
    console.log(token);
    // Example JWT and secret key (in a real scenario, the secret key should be stored securely)
    let tokendata = {};
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("JWT verification failed:", err);
        // Handle invalid token
      } else {
        console.log("Decoded JWT payload:", decoded);
        tokendata = decoded;
        // Token is valid, handle the decoded payload
      }
    });
    // Find the user by Token in the User model
    let userdata = await User.findOne({ _id: tokendata.id });
    console.log("Found user:", userdata);

    // Check if required fields are present in the request
    // if (!rollNo || !registration_no || !stream) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Missing required fields",
    //   });
    // }

    // Create an entry for exitstuden details
    const exitUser = await exitstudent.create({
      firstName,
      lastName,
      fatherName,
      motherName,
      date_of_birth,
      email,
      Phone_no,
      stream,
      session,
      rollNo,
      registrationNo,
      year_cgpa_1th,
      year_cgpa_2nd,
      year_cgpa_3rd,
      year_cgpa_4th,
      final_cgpa,
      user: userdata._id,
    });

    emailService.sendPgCourseEmail(exitUser);
    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: exitUser,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Failed to create user. Please try again later.",
    });
  }
};

exports.get_exitstudent = async (req, res) => {
  try {
    const token = req.cookies.token || req.body.token;
    // Retrieve the value of the 'id' parameter from the URL
    console.log("hi", token);
    // const newadmissions = await newadmission.findById({ _id: id });

    let tokendata = {};
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("JWT verification failed:", err);
        // Handle invalid token
      } else {
        console.log("Decoded JWT payload:", decoded);
        tokendata = decoded;
        // Token is valid, handle the decoded payload
      }
    });

    // Find the user by email in the User model
    let userdata = await exitstudent.findOne({ user: tokendata.id });
    console.log("Found user:", userdata);
    if (!userdata) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with Given Id",
      });
    }
    res.status(200).json({
      success: true,
      data: userdata,
      message: "Success",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

//all Exit student record
exports.get_all_exit_student = async (req, res) => {
  try {
    // fetch all todo items from database
    const Allexitstudent = await exitstudent.find({});

    // Response
    res.status(200).json({
      success: true,
      data: Allexitstudent,
      message: "Entire New Addmission  Data is Fetched",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

exports.delete_id_exitstudent = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("delete 123", id);
    await exitstudent.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Exitstudent deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

