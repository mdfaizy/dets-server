const exitstudent = require("../models/exitstudentModel.js");
require("dotenv").config();
const EmailDetails = require("../service/EmailDetails.js");
const emailService = new EmailDetails();
exports.exitStudent = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      date_of_birth,
      gender,
      domicile,
      phone_no,

      category,
      // Parents details
      fatherName,
      motherName,
      parentPhoneno,
      // collage details
      rollNo,
      stream,
      registrationNo,
      session,
      year_cgpa_1th,
      year_cgpa_2nd,
      year_cgpa_3rd,
      year_cgpa_4th,
      final_cgpa,
    } = req.body;
    const userId = req.user.id;

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
      email,
      date_of_birth,
      gender,
      domicile,
      phone_no,

      category,
      // Parents details
      fatherName,
      motherName,
      parentPhoneno,
      // collage details
      rollNo,
      stream,
      registrationNo,
      session,
      year_cgpa_1th,
      year_cgpa_2nd,
      year_cgpa_3rd,
      year_cgpa_4th,
      final_cgpa,
      user: userId,
    });

    emailService.sendExitStudentEmail(exitUser);
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


exports.getExitStudentByOne = async (req, res) => {
  try {
    const exitStudent = await exitstudent.findOne();
    
    if (!exitStudent) {
      return res.status(404).json({
        success: false,
        message: "Exit Student Data not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Exit Student Data fetched successfully",
      exitStudent,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};


exports.getStudentProfile = async (req, res) => {
  try {
    const id = req.user.id;
    console.log("userId", id);
    const exitData = await exitstudent.findOne({ user: id });
    if (!exitData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      exitData,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err.message,
    });
  }
};

exports.get_exitstudent = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);

    // Find the user by email in the User model
    let userdata = await exitstudent.findById({ _id: id });
    
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
      message: " Exit Student  Data is Fetched",
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
      message: "Exit Student deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

exports.updateExitStudentById = async (req, res) => {
  try {
    const { id } = req.params;

    // Destructure the required fields from the request body
    const {
      firstName,
      lastName,
      email,
      date_of_birth,
      gender,
      domicile,
      phone_no,

      category,
      // Parents details
      fatherName,
      motherName,
      parentPhoneno,
      // collage details
      rollNo,
      stream,
      registrationNo,
      session,
      year_cgpa_1th,
      year_cgpa_2nd,
      year_cgpa_3rd,
      year_cgpa_4th,
      final_cgpa,
    } = req.body;

    // Find and update the admission record by id
    const updatexitstudent = await exitstudent.findByIdAndUpdate(
      id,
      {
        $set: {
          firstName,
      lastName,
      email,
      date_of_birth,
      gender,
      domicile,
      phone_no,

      category,
      // Parents details
      fatherName,
      motherName,
      parentPhoneno,
      // collage details
      rollNo,
      stream,
      registrationNo,
      session,
      year_cgpa_1th,
      year_cgpa_2nd,
      year_cgpa_3rd,
      year_cgpa_4th,
      final_cgpa,

          updatedAt: Date.now(),
        },
      },
      { new: true }
    );

    if (!updatexitstudent) {
      return res.status(404).json({
        success: false,
        message: "Job Data not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatexitstudent,
      message: "Updated Successfully",
    });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
