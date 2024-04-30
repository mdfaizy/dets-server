// const Job = require("../models/jobdetails.js");
// const User = require("../models/studentmodel.js");
// const jwt = require("jsonwebtoken");
// // const { validationResult } = require('express-validator');
// // const  jobValidationRules  = require("../middlewares/jobValidation.js");

// require("dotenv").config();

// const job = async (req, res) => {
//   try {

//     //  // Applying validation rules
//     //  const errors = validationResult(req);
//     //  if (!errors.isEmpty()) {
//     //    return res.status(400).json({ errors: errors.array() });
//     //  }
//     const {
//       fullName,
//       email,
//       phone_No,
//       home_city,
//       companies_name,
//       companies_city,
//       package_lpa,
//       totalApplyCompanies,
//       noOfSelectInterview,
//       selectType,
//       companiesType,
//       job_role,
//       token,
//     } = req.body;

//     // Check if required fields are present in the request
//     // if (!employee_name || !select_company || !job_role) {
//     //     return res.status(400).json({
//     //         success: false,
//     //         message: "Missing required fields"
//     //     });
//     // }

//     console.log(token);
//     // // // Example JWT and secret key (in a real scenario, the secret key should be stored securely)
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
//     // Find the user by Token in the User model
//     let userdata = await User.findOne({ _id: tokendata.id });
//     console.log("Found user:", userdata);

//     // Create an entry for job details
//     const user = await Job.create({
//       fullName,
//       email,
//       phone_No,
//       home_city,
//       companies_name,
//       companies_city,
//       package_lpa,
//       totalApplyCompanies,
//       noOfSelectInterview,
//       selectType,
//       companiesType,
//       job_role,
//       user: userdata._id,
//     });

//     return res.status(201).json({
//       success: true,
//       message: "User Created Successfully",
//       data: user,
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({
//       success: false,
//       message: "Failed to create user. Please try again later.",
//     });
//   }
// };

// // const get_dets_job = async (req, res) => {
// //   try {
// //     const token = req.cookies.token || req.body.token;
// //     // Retrieve the value of the 'id' parameter from the URL
// //     console.log("hi", token);
// //     // const newadmissions = await newadmission.findById({ _id: id });

// //     let tokendata = {};
// //     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
// //       if (err) {
// //         console.log("JWT verification failed:", err);
// //         // Handle invalid token
// //       } else {
// //         console.log("Decoded JWT payload:", decoded);
// //         tokendata = decoded;
// //         // Token is valid, handle the decoded payload
// //       }
// //     });

// //     // Find the user by email in the User model
// //     let userdata = await Job.findOne({ user: tokendata.id });
// //     console.log("Found user:", userdata);
// //     if (!userdata) {
// //       return res.status(404).json({
// //         success: false,
// //         message: "No Data Found with Given Id",
// //       });
// //     }
// //     res.status(200).json({
// //       success: true,
// //       data: userdata,
// //       message: "Success",
// //     });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).json({
// //       success: false,
// //       error: err.message,
// //       message: "Server error",
// //     });
// //   }
// // };

// const get_job_student = async (req, res) => {
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
//     let userdata = await Job.findOne({ user: tokendata.id });
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
// //All job information in Student  data in Dets
// const get_all_Job_student = async (req, res) => {
//   try {
//     // fetch all todo items from database
//     const AllJob = await Job.find({});

//     // Response
//     res.status(200).json({
//       success: true,
//       data: AllJob,
//       message: "Entire New Addmission  Data is Fetched",
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

// //delete data job data 


// module.exports = { job,get_job_student,get_all_Job_student };




// const Job = require("../models/jobdetails.js");
// const User = require("../models/studentmodel.js");
// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// const job = async (req, res) => {
//     try {
//         const {
//             fullName,
//             email,
//             phone_No,
//             home_city,
//             companies_name,
//             companies_city,
//             package_lpa,
//             totalApplyCompanies,
//             noOfSelectInterview,
//             selectType,
//             companiesType,
//             job_role,
//             token,
//         } = req.body;

//         let tokendata = {};
//         jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//             if (err) {
//                 console.log("JWT verification failed:", err);
//             } else {
//                 console.log("Decoded JWT payload:", decoded);
//                 tokendata = decoded;
//             }
//         });

//         let userdata = await User.findOne({ _id: tokendata.id });
//         console.log("Found user:", userdata);

//         const user = await Job.create({
//             fullName,
//             email,
//             phone_No,
//             home_city,
//             companies_name,
//             companies_city,
//             package_lpa,
//             totalApplyCompanies,
//             noOfSelectInterview,
//             selectType,
//             companiesType,
//             job_role,
//             user: userdata._id,
//         });

//         return res.status(201).json({
//             success: true,
//             message: "User Created Successfully",
//             data: user,
//         });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({
//             success: false,
//             message: "Failed to create user. Please try again later.",
//         });
//     }
// };

// const get_job_student = async (req, res) => {
//     try {
//         const token = req.cookies.token || req.body.token;

//         let tokendata = {};
//         jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//             if (err) {
//                 console.log("JWT verification failed:", err);
//             } else {
//                 console.log("Decoded JWT payload:", decoded);
//                 tokendata = decoded;
//             }
//         });

//         let userdata = await Job.findOne({ user: tokendata.id });
//         console.log("Found user:", userdata);

//         if (!userdata) {
//             return res.status(404).json({
//                 success: false,
//                 message: "No Data Found with Given Id",
//             });
//         }

//         res.status(200).json({
//             success: true,
//             data: userdata,
//             message: "Success",
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             success: false,
//             error: err.message,
//             message: "Server error",
//         });
//     }
// };

// const get_all_Job_student = async (req, res) => {
//     try {
//         const AllJob = await Job.find();

//         res.status(200).json({
//             success: true,
//             data: AllJob,
//             message: "Entire Job Data is Fetched",
//         });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({
//             success: false,
//             error: err.message,
//             message: "Server error",
//         });
//     }
// };

// module.exports = { job, get_job_student, get_all_Job_student };













const Job = require("../models/jobdetails.js");
const User = require("../models/studentmodel.js");
const jwt = require("jsonwebtoken");
// const { validationResult } = require('express-validator');
// const  jobValidationRules  = require("../middlewares/jobValidation.js");

require("dotenv").config();

exports.job = async (req, res) => {
  try {

    //  // Applying validation rules
    //  const errors = validationResult(req);
    //  if (!errors.isEmpty()) {
    //    return res.status(400).json({ errors: errors.array() });
    //  }
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
      token,
    } = req.body;

    // Check if required fields are present in the request
    // if (!employee_name || !select_company || !job_role) {
    //     return res.status(400).json({
    //         success: false,
    //         message: "Missing required fields"
    //     });
    // }

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

    // Create an entry for job details
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
      user: userdata._id,
    });

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

// const get_dets_job = async (req, res) => {
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
//     let userdata = await Job.findOne({ user: tokendata.id });
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

exports.get_job_student = async (req, res) => {
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
    let userdata = await Job.findOne({ user: tokendata.id });
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
//All job information in Student  data in Dets
exports.get_all_Job_student = async (req, res) => {
  try {
    // fetch all todo items from database
    const AllJob = await Job.find({});

    // Response
    res.status(200).json({
      success: true,
      data: AllJob,
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






exports.delete_id_jobstudent = async (req, res) => {
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
        message: 'Pgcource not found'
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