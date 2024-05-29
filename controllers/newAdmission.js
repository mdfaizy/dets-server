const newadmission = require("../models/newadmission.js");
require("dotenv").config();

const EmailDetails = require("../service/EmailDetails");
const emailService = new EmailDetails();

const cloudinary = require("cloudinary").v2;
async function uploadFileToCloudinary(file, folder) {
  const options = { folder, resource_type: "auto" };
  return await cloudinary.uploader.upload(file.tempFilePath, options);
}
function isFileTypeSupported(filename, supportedTypes) {
  const fileType = filename.split(".").pop().toLowerCase();
  return supportedTypes.includes(fileType);
}
exports.newAdmission = async (req, res) => {
  try {
    // Destructure the required fields from the request body
    const {
      firstName,
      lastName,
      email,
      date_of_birth,
      gender,
      domicile,
      phone_no,
      addhar_number,
      category,

      fatherName,
      motherName,
      parent_phone_no,
      parent_incom,
      parent_occoupation,

      examType,
      counselling,
      start_session,
      end_session,

      application_exam_no,
      scoure_rank,
      cource_name,
      stream,

      village,
      police_station,
      distric,
      pin_code,
      state_name,

      schoolName_10th,
      roll_No_10th,
      regisration_No_10th,
      board_Name_10th,
      year_of_passing_10th,
      persentage_10th,

      schoolName_12th,
      roll_No_12th,
      regisration_No_12th,
      board_Name_12th,
      year_of_passing_12th,
      persentage_12th,
      token,
    } = req.body;

    const userId = req.user.id;
    console.log("nw", userId);

    // Check if the user has already submitted an admission
    // const existingAdmission = await newadmission.findOne({ user: userdata._id });
    // // console.log(existingAdmission);/
    // console.log("aleray sumbit",existingAdmission);
    // if (existingAdmission) {
    //   return res.status(400).json({
    //     success: false,
    //     message: 'User already has an existing admission record.',
    //   });
    // }
    const passport_Photo_Size = req.files?.passport_Photo_Size;
    const aadhar_card_file = req.files && req.files.aadhar_card_file;
    const your_Residence_Certificate =
      req.files && req.files.your_Residence_Certificate;
    const sc_MarksheetFile = req.files && req.files.sc_MarksheetFile;
    const antiragging = req.file && req.file.antiragging;
    const rankcardFile = req.file && req.file.rankcardFile;
    const signature_or_Thumb = req.file && req.file.signature_or_Thumb;
    const files = [
      aadhar_card_file,
      passport_Photo_Size,
      your_Residence_Certificate,
      sc_MarksheetFile,
      antiragging,
      rankcardFile,
      signature_or_Thumb,
    ];
    // Validation for file types
    const supportedTypes = ["jpg", "jpeg", "png"];
    for (const file of files) {
      if (file && !isFileTypeSupported(file.name, supportedTypes)) {
        return res.status(400).json({
          message: `Unsupported file type for ${file.name}`,
          success: false,
        });
      }
    }
    const uploadedFiles = [];
    // Upload files to Cloudinary and store their URLs
    for (const file of files) {
      if (file) {
        const response = await uploadFileToCloudinary(file, `${firstName}_img`);
        console.log(response);
        uploadedFiles.push(response.secure_url);
      }
    }

    
    console.log(uploadedFiles[0]);
    console.log(uploadedFiles[1]);
    console.log(uploadedFiles[2]);
    console.log(uploadedFiles[3]);
    // Save details to the database using the newadmission model
    const newAdmission = await newadmission.create({
      firstName,
      lastName,

      email,
      date_of_birth,
      gender,
      domicile,
      phone_no,
      addhar_number,
      category,

      fatherName,
      motherName,
      parent_phone_no,
      parent_incom,
      parent_occoupation,

      examType,
      counselling,
      start_session,
      end_session,
      application_exam_no,
      scoure_rank,
      cource_name,
      stream,

      village,
      police_station,
      distric,
      pin_code,
      state_name,

      schoolName_10th,
      roll_No_10th,
      regisration_No_10th,
      board_Name_10th,
      year_of_passing_10th,
      persentage_10th,
      schoolName_12th,
      roll_No_12th,
      regisration_No_12th,
      board_Name_12th,
      year_of_passing_12th,
      persentage_12th,
      // rankcardFile,
      sc_MarksheetFile: uploadedFiles[0],
      aadhar_card_file: uploadedFiles[1],
      your_Residence_Certificate: uploadedFiles[2],
      hs_MarksheetFile: uploadedFiles[3],
      passport_Photo_Size: uploadedFiles[4],
      antiragging: uploadedFiles[6],
      rankcardFile: uploadedFiles[5],
      signature_or_Thumb: uploadedFiles[7],
      user: userId,
    });

    emailService.sendNewAdmissionCourseEmail(newAdmission);
    return res.status(201).json({
      success: true,
      message: "User Created Successfully",
      newAdmission,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Failed to create user. Please try again later.",
    });
  }
};

exports.get_student_profile = async (req, res) => {
  try {
    const id = req.user.id;
    console.log("userId", id);
    const Newadmission = await newadmission.findOne({ user: id });
    console.log("new Admissiom", Newadmission);
    if (!Newadmission) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "User Data fetched successfully",
      Newadmission,
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

// exports.getNewAdmissionById = async (req, res) => {
//   try {
//     const id = req.params.id;
//     console.log("ID:", id);
//     const userdata = await newadmission.findById(id);
//     console.log("User data:", userdata);
//     if (!userdata) {
//       return res
//         .status(404)
//         .json({ success: false, message: "No Data Found with Given Id" });
//     }
//     res.status(200).json({ success: true, data: userdata, message: "Success" });
//   } catch (err) {
//     console.error("Error:", err);
//     res
//       .status(500)
//       .json({ success: false, error: err.message, message: "Server error" });
//   }
// };

// exports.get_student_profile = async (req, res) => {
//   try {
//     const id = req.user.id;
//     console.log("userId", id);
//     const Newadmission = await newadmission.findOne({ user: id });
//     console.log("pd", pgdata);
//     if (!Newadmission) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       message: "User Data fetched successfully",
//       Newadmission,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error",
//       error: err.message,
//     });
//   }
// };

exports.getNewAdmissionById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id", id);
    const Newadmission = await newadmission.findById(id);
    if (!Newadmission) {
      return res.status(404).json({
        success: false,
        message: "Student Data not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Student Data fetched successfully",
      Newadmission,
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

exports.get_new_admission = async (req, res) => {
  try {
    // fetch all newadmissions items from database
    const newadmissions = await newadmission.find();

    // Response
    res.status(200).json({
      success: true,
      data: newadmissions,
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
//delete data from server and client side data
exports.delete_newadmission = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("delete 123", id);
    await newadmission.findByIdAndDelete(id);
    res.json({
      success: true,
      message: "Newadmission deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

// Update new admission handler function
exports.update_New_Admission = async (req, res) => {
  try {
    const { id } = req.params;
    console.log("id:", id);

    // Destructure the required fields from the request body
    const {
      firstName,
      lastName,

      email,
      date_of_birth,
      gender,
      domicile,
      phone_no,
      addhar_number,
      category,

      fatherName,
      motherName,
      parent_phone_no,
      parent_incom,
      parent_occoupation,

      examType,
      counselling,
      start_session,
      end_session,
      application_exam_no,
      scoure_rank,
      cource_name,
      stream,

      village,
      police_station,
      distric,
      pin_code,
      state_name,

      schoolName_10th,
      roll_No_10th,
      regisration_No_10th,
      board_Name_10th,
      year_of_passing_10th,
      persentage_10th,
      schoolName_12th,
      roll_No_12th,
      regisration_No_12th,
      board_Name_12th,
      year_of_passing_12th,
      persentage_12th,
    } = req.body;

    // Find and update the admission record by id
    const updatedAdmission = await newadmission.findByIdAndUpdate(
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
          addhar_number,
          category,
    
          fatherName,
          motherName,
          parent_phone_no,
          parent_incom,
          parent_occoupation,
    
          examType,
          counselling,
          start_session,
          end_session,
          application_exam_no,
          scoure_rank,
          cource_name,
          stream,
    
          village,
          police_station,
          distric,
          pin_code,
          state_name,
    
          schoolName_10th,
          roll_No_10th,
          regisration_No_10th,
          board_Name_10th,
          year_of_passing_10th,
          persentage_10th,
          schoolName_12th,
          roll_No_12th,
          regisration_No_12th,
          board_Name_12th,
          year_of_passing_12th,
          persentage_12th,
          updatedAt: Date.now(), // Update the 'updatedAt' field
        },
      },
      { new: true } // To return the updated record
    );

    if (!updatedAdmission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updatedAdmission,
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
