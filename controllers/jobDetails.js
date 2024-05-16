const Job = require("../models/jobdetails.js");
require("dotenv").config();
const mongoose = require("mongoose");

exports.job = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone_No,
      home_city,
      companies_name,
      companies_city,
      package_lpa,
      totalApplyCompanies,
      noOfSelectInterview,
      selectType,
      companiesType,
      job_role,
    } = req.body;

    const user = await Job.create({
      fullName,
      email,
      phone_No,
      home_city,
      companies_name,
      companies_city,
      package_lpa,
      totalApplyCompanies,
      noOfSelectInterview,
      selectType,
      companiesType,
      job_role,
    });

    return res.status(201).json({
      success: true,
      message: "Job Created Successfully",
      data: user,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Failed to create job. Please try again later.",
    });
  }
};

// Route for fetching a job by ID
exports.get_job_student = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);

    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return res.status(404).json({ message: "User doesn't exist" });
    // }
    const jobData = await Job.findById({_id:id}).populate({
      path: "user",
      
    })
    .exec();
    if (!jobData) {
      return res.status(404).json({
        success: false,
        message: "Job not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Job Data fetched successfully",
      jobData,
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













//All job information in Student  data in Dets
exports.get_all_Job_student = async (req, res) => {
  try {
    // fetch all todo items from database
    const AllJob = await Job.find({});

    // Response
    res.status(200).json({
      success: true,
      data: AllJob,
      message: "Entire Job  Data is Fetched",
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

exports.delete_id_jobstudent = async (req, res) => {
  try {
    // 1. Check for missing or invalid ID:
    const { id } = req.params;
    console.log("id",id)
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid job ID provided",
      });
    }

    console.log("id", id); // Still useful for debugging

    // 2. Proceed with deletion if ID is valid:
    await Job.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Job Data deleted successfully",
    });
  } catch (err) {
    console.error(err); // Log the actual error for debugging
    res.status(500).json({
      success: false,
      error: "Internal server error", // Avoid client-side exposure of detailed errors
      message: "An error occurred while deleting the job data",
    });
  }
};







exports.update_job_cource = async (req, res) => {
  try {
    const { id } = req.params;

    // Destructure the required fields from the request body
    const {
      fullName,
      email,
      phone_No,
      home_city,
      companies_name,
      companies_city,
      package_lpa,
      totalApplyCompanies,
      noOfSelectInterview,
      selectType,
      companiesType,
      job_role,
    } = req.body;

    // Find and update the admission record by id
    const updatedjobcource = await Job.findByIdAndUpdate(
      id,
      {
        $set: {
          fullName,
      email,
      phone_No,
      home_city,
      companies_name,
      companies_city,
      package_lpa,
      totalApplyCompanies,
      noOfSelectInterview,
      selectType,
      companiesType,
      job_role,

          updatedAt: Date.now() // Update the 'updatedAt' field
        }
      },
      { new: true } // To return the updated record
    );

    if (!updatedjobcource) {
      return res.status(404).json({
        success: false,
        message: 'Job Data not found'
      });
    }

    res.status(200).json({
      success: true,
      data: updatedjobcource,
      message: 'Updated Successfully'
    });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: 'Server error'
    });
  }
}