const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    // required: true,
    enum: ["Student", "Instructor"], // <-- Updated enum values
  },
  newAdmission: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "newAdmissionCont",
    },
  ],
  pgcourse: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "pgcource",
    },
  ],
  exitStudent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "exitstudentCont",
    },
  ],
  job: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "jobDeatils",
    },
  ],
  feedback: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "feedback",
    // required: true,
  },
  instructorKey: {
    type: String,
    default: null,
  },
  image: {
    type: String,
    // required: true,
  },
  resetPasswordToken: {
    type: String,
    default: null,
  },
  resetPasswordExpires: {
    type: Date,
    default: null,
  },
});

module.exports = mongoose.model("User", studentSchema);
