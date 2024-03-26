// //import th model
// const newadmission = require("../models/newadmission.js");
// const jwt = require("jsonwebtoken");
// const getNewAdmissionById = async (req, res) => {
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
//     let userdata = await newadmission.findOne({ user: tokendata.id });
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
// //define route and fetch all new admission data for server
// const get_new_admission = async (req, res) => {
//   try {
//     // fetch all newadmissions items from database
//     const newadmissions = await newadmission.find({});

//     // Response
//     res.status(200).json({
//       success: true,
//       data: newadmissions,
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
// //delete data from server and client side data
// const delete_newadmission = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("delete 123", id);
//     await newadmission.findByIdAndDelete(id);
//     res.json({
//       success: true,
//       message: "Newadmission deleted successfully",
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       error: err.message,
//       message: "Server error",
//     });
//   }
// };

// // Update new admission handler function
// const update_New_Admission = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log('id:', id);

//     // Destructure the required fields from the request body
//     const {
//       firstName,
//       lastName,
//       fatherName,
//       motherName,
//       email,
//       date_of_birth,
//       examType,
//       application_exam_no,
//       scoure_rank,
//       cource_name,
//       stream,
//       phone_no,
//       category,

//       schoolName_10th,
//       roll_No_10th,
//       regisration_No_10th,
//       board_Name_10th,
//       year_of_passing_10th,
//       persentage_10th,

//       schoolName_12th,
//       roll_No_12th,
//       regisration_No_12th,
//       board_Name_12th,
//       year_of_passing_12th,
//       persentage_12th,
//     } = req.body;

//     // Find and update the admission record by id
//     const updatedAdmission = await newadmission.findByIdAndUpdate(
//       id,
//       {
//         $set: {
//           firstName,
//       lastName,
//       fatherName,
//       motherName,
//       email,
//       date_of_birth,
//       examType,
//       application_exam_no,
//       scoure_rank,
//       cource_name,
//       stream,
//       phone_no,
//       category,

//       schoolName_10th,
//       roll_No_10th,
//       regisration_No_10th,
//       board_Name_10th,
//       year_of_passing_10th,
//       persentage_10th,

//       schoolName_12th,
//       roll_No_12th,
//       regisration_No_12th,
//       board_Name_12th,
//       year_of_passing_12th,
//       persentage_12th,

//           updatedAt: Date.now() // Update the 'updatedAt' field
//         }
//       },
//       { new: true } // To return the updated record
//     );

//     if (!updatedAdmission) {
//       return res.status(404).json({
//         success: false,
//         message: 'Admission not found'
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: updatedAdmission,
//       message: 'Updated Successfully'
//     });
//   } catch (err) {
//     console.error('Error:', err);
//     res.status(500).json({
//       success: false,
//       error: err.message,
//       message: 'Server error'
//     });
//   }
// }


// module.exports = {
//   getNewAdmissionById,
//   get_new_admission,
//   delete_newadmission,
//   update_New_Admission
// };
