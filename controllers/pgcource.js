const Pgcourses = require("../models/pgcource.js");
const User = require("../models/studentmodel.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const EmailDetails = require('../service/EmailDetails')

const emailService = new EmailDetails();
const pg_cource = async (req, res) => {
  try {
    const {
      fristName,
      lastName,
      fatherName,
      motherName,
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

    // Check if required fields are present in the request
    // if (!employee_name || !select_company || !job_role) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Missing required fields",
    //   });
    // }

    // Create an entry for job details

    console.log(token);
    // // // Example JWT and secret key (in a real scenario, the secret key should be stored securely)
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

    const user = await Pgcourses.create({
      fristName,
      lastName,
      fatherName,
      motherName,
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
      user: userdata._id,
    });

    emailService.sendPgCourseEmail(user);
    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
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

// const get_pg_cource = async (req, res) => {
//   try {
//     const token = req.cookies.token || req.body.token;
//     // Retrieve the value of the 'id' parameter from the URL
//     console.log("hi", token);
//     // const newadmissions = await newadmission.findById({ _id: id });

//     let tokendata = {};
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         console.log("JWT verification failed:", err);
//         // Handle invalid token
//       } else {
//         console.log("Decoded JWT payload:", decoded);
//         tokendata = decoded;
//         // Token is valid, handle the decoded payload
//       }
//     });

//     // Find the user by email in the User model
//     let userdata = await Pgcourses.findOne({ user: tokendata.id });
//     console.log("Found user:", userdata);
//     if (!userdata) {
//       return res.status(404).json({
//         success: false,
//         message: "No Data Found with Given Id",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       data: userdata,
//       message: "Success",
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       error: err.message,
//       message: "Server error",
//     });
//   }
// };




const get_pg_student = async (req, res) => {
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
    let userdata = await Pgcourses.findOne({ user: tokendata.id });
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


//all pg student information is available

const get_all_pgcource_student = async (req, res) => {
  try {
    // fetch all todo items from database
    const  Allpgcource= await Pgcourses.find({});

    // Response
    res.status(200).json({
      success: true,
      data: Allpgcource,
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


const delete_id_pgstudent = async (req, res) => {
  try {
      const {id} = req.params;
      console.log("delete 123",id)
      await Pgcourses.findByIdAndDelete(id);
      res.json({
          success: true,
          message : "Newadmission deleted successfully"
      })
  }
  catch (err) {
      res.status(500).json({
          success: false,
          error: err.message,
          message: "Server error",
        });
  }
}

module.exports = { pg_cource, get_pg_student,get_all_pgcource_student,delete_id_pgstudent };
