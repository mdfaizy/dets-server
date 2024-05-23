const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
  {
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
      enum: ["Student", "Instructor"],
    },

    isAdmissionTaken: {
      type: Boolean,
      default: false,
    },

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
    // resetPasswordToken: {
    //   type: String,
    //   default: null,
    // },
    // resetPasswordExpires: {
    //   type: Date,
    //   default: null,
    // },
    token: {
      type: String,
    },
    resetPasswordExpires: {
      type: Date,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", studentSchema);
