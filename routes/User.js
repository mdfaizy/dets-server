
const express = require('express');
const router = express.Router();
const { login, signup, sendotp ,get_Profile,getAllUserRecordsById} = require("../controllers/Auth");
const { resetPasswordToken,resetPassword} = require("../controllers/ResetPassword");
const { auth } = require("../middlewares/auth");

// Routes for Login, Signup, and Authentication

// Authentication routes

// Route for user signup
router.post("/signup", signup);

// Route for user login
router.post("/login", login);

// Route for sending OTP
router.post("/sendotp", sendotp);
router.get("/Get_Profile",auth,get_Profile);

// Route for changing password (requires authentication)
// router.post("/changepassword", auth, changePassword);

// Reset Password routes

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword);

// Export the router for use in the main application
module.exports = router;