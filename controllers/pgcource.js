const Pgcourses = require("../models/pgcource.js");
require("dotenv").config();
const EmailDetails = require("../service/EmailDetails");
const emailService = new EmailDetails();
exports.pg_course = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      fatherName,

      date_of_birth,
      email,
      InstituteName,
      stream,
      cource,
      gender,
      category,
      allIndiaRank,

      session,
      exameType,

      categoryRank,
      InstituteCity,
      token,
    } = req.body;
    const userId = req.user.id;
    // Check if required fields are present in the request
    // if (!employee_name || !select_company || !job_role) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Missing required fields",
    //   });
    // }

    // Create an entry for job details

    const user = await Pgcourses.create({
      firstName,
      lastName,
      fatherName,

      date_of_birth,
      email,
      InstituteName,
      stream,
      cource,
      gender,
      category,
      allIndiaRank,

      session,
      exameType,

      categoryRank,
      InstituteCity,
      user: userId,
    });

    emailService.sendPgCourseEmail(user);

    return res.status(201).json({
      success: true,
      message: "PG Data  Successfully",
      data: user,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Failed to create user. Please try again later.",
    });
  }
};


exports.getPgStudentByOne = async (req, res) => {
  try {
    const PgcourceData = await Pgcourses.findOne();
    
    if (!PgcourceData) {
      return res.status(404).json({
        success: false,
        message: "Exit Student Data not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Exit Student Data fetched successfully",
      PgcourceData,
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

exports.getstudent_profile = async (req, res) => {
  try {
    const id = req.user.id;
    console.log("userId", id);
    const pgdata = await Pgcourses.findOne({ user: id });
    console.log("pd", pgdata);
    if (!pgdata) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      pgdata,
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

exports.get_pg_course_byId = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const pgdata = await Pgcourses.findById(id);
    if (!pgdata) {
      return res.status(404).json({
        success: false,
        message: "Job Data not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Job Data fetched successfully",
      pgdata,
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

//all pg student information is available

exports.get_all_course_student = async (req, res) => {
  try {
    // fetch all todo items from database
    const Allpgcource = await Pgcourses.find({});

    // Response
    res.status(200).json({
      success: true,
      data: Allpgcource,
      message: "Entire Pg Addmission  Data is Fetched",
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
//Delete single pg student information is available
exports.delete_id_pgstudent = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("delete 123", id);
    await Pgcourses.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Pg Admission deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
//update pd courses data 
exports.update_pg_course = async (req, res) => {
  try {
    const { id } = req.params;

    // Destructure the required fields from the request body
    const {
      firstName,
      lastName,
      fatherName,

      date_of_birth,
      email,
      InstituteName,
      stream,
      cource,
      gender,
      category,
      allIndiaRank,

      session,
      exameType,

      categoryRank,
      InstituteCity,
    } = req.body;

    // Find and update the admission record by id
    const updatedPgcource = await Pgcourses.findByIdAndUpdate(
      id,
      {
        $set: {
          firstName,
          lastName,
          fatherName,

          date_of_birth,
          email,
          InstituteName,
          stream,
          cource,
          gender,
          category,
          allIndiaRank,

          session,
          exameType,

          categoryRank,
          InstituteCity,

          updatedAt: Date.now(), // Update the 'updatedAt' field
        },
      },
      { new: true } // To return the updated record
    );

    if (!updatedPgcource) {
      return res.status(404).json({
        success: false,
        message: "Pgcource not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedPgcource,
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
