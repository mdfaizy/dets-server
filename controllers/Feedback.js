// const Feedback = require("../models/feedback");
// exports.postFeedback = async (req, res) => {
//   //   try {
//   //     const { title, description } = req.body;

//   //     // Create feedback including user's name
//   //     const feedback = await Feedback.create({
//   //       title,
//   //       description,
//   //       // user: req.user._id,
//   //       // userName: `${req.user.firstName} ${req.user.lastName}`
//   //     });

//   //     res.status(201).json({ success: true, data: feedback });
//   //   } catch (error) {
//   //     console.error(error);
//   //     res.status(500).json({ success: false, message: 'Failed to submit feedback' });
//   //   }
//   // };

//   try {
//     //extract title and desxcription from reauest body
//     const { title, description } = req.body;
//     //create a new Todo Obj and insert in DB
//     const response = await Feedback.create({ title, description });
//     //send a json response with a success flag
//     res.status(200).json({
//       success: true,
//       data: response,
//       message: "Entry Created Successfully",
//     });
//   } catch (err) {
//     console.error(err);
//     console.log(err);
//     res.status(500).json({
//       success: false,
//       data: "internal server error",
//       message: err.message,
//     });
//   }
// };

// feedback.js
const Feedback = require("../models/feedback");
const User = require("../models/studentmodel.js");
const newadmission = require("../models/newadmission.js");
// exports.postFeedback = async (req, res) => {
//   try {
//     const { title, description ,rating } = req.body;
//     // console.log("hiii",req);
//     // Check if the rating is within the allowed range (1 to 5)
//     if (rating < 1 || rating > 5) {
//       return res.status(400).json({ success: false, message: "Invalid rating. Rating must be between 1 and 5." });
//     }
//     const { id } = req.user; // Assuming user ID is neede
//     //  console.log(id);
//     let userdata = await User.findOne({ _id: id });
//     const data = req.newadmission;
//     console.log("heko", userdata);

//     // let newAdmission=await newadmission.findOne({_id:id});
//     // console.log("newAdmission",newAdmission);

//     const feedback = await Feedback.create({
//       title,
//       description,
//       userName: `${userdata.firstName} ${userdata.lastName}`,
//       image: `${userdata.image}`,
//       rating :rating ,
//       user: id,
//     });

//     console.log("image", userdata.image);
//     res.status(201).json({ success: true, data: feedback });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ success: false, message: "Failed to submit feedback" });
//   }
// };


exports.postFeedback = async (req, res) => {
  try {
    const { title, description, rating,descriptio } = req.body;
    console.log("ratig",rating,title,description,descriptio);
    const { id } = req.user;

    if (rating < 1 || rating > 5) {
      return res.status(400).json({ success: false, message: "Invalid rating. Rating must be between 1 and 5." });
    }
    

    let userdata = await User.findOne({ _id: id });

    const feedback = await Feedback.create({
      title,
      description,
      rating,
      descriptio,
      userName: `${userdata.firstName} ${userdata.lastName}`,
      image: `${userdata.image}`,
      user: id,
    });

    res.status(201).json({ success: true, data: feedback });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to submit feedback" });
  }
};


exports.getAllFeedback = async (req, res) => {
  try {
    // fetch all todo items from database
    const feedbacks = await Feedback.find({});

    // Response
    res.status(200).json({
      success: true,
      data: feedbacks,
      message: "Entire Todo Data is Fetched",
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

exports.getFeedbackId = async (req, res) => {
  try {
    const id = req.params.id;
    const feedback = await Feedback.findById({ _id: id });

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with Given Id",
      });
    }
    res.status(200).json({
      success: true,
      data: feedback,
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

exports.updateFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const feedback = await Feedback.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        title,
        description,
        updateAt: Date.now(),
      }
    );
    res.status(200).json({
      success: true,
      data: feedback,
      message: "Update Successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

exports.deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;
    await Feedback.findByIdAndDelete(id);

    res.json({
      success: true,
      message: "Feedback deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};
