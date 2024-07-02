
const express = require('express');
const router = express.Router();
const { login, signup, sendotp ,get_Profile,getAllUserRecordsById,get_all_user} = require("../controllers/Auth");
const { resetPasswordToken,resetPassword} = require("../controllers/ResetPassword");
const { auth } = require("../middlewares/auth");

                            // Routes for Login, Signup, and Authentication
// ********************************************************************************************************
// Route for user signup
router.post("/signup", signup);
// Route for user login
router.post("/login", login);
// Route for sending OTP
router.post("/sendotp", sendotp);

router.get("/Get_Profile",auth,get_Profile);
router.get('/get_all_user',auth,get_all_user);
// Route for changing password (requires authentication)
// router.post("/changepassword", auth, changePassword);


// Reset Password routes

// Route for generating a reset password token
router.post("/reset-password-token", resetPasswordToken);

// Route for resetting user's password after verification
router.post("/reset-password", resetPassword);

module.exports = router;