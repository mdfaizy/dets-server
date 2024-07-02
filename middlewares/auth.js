// auth middleware
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/studentmodel");
const { json } = require("body-parser");
dotenv.config();
const auth = async (req, res, next) => {
  try {
    // Extracting JWT from request cookies, body or header
    const token =
      req.cookies.token ||
      req.body.token ||
      req.headers.authorization.replace("Bearer ", "");
    console.log("token : ", token);
    // If JWT is missing, return 401 Unauthorized response
    if (!token) {
      return res.status(401).json({ success: false, message: `Token Missing` });
    }
    // Verifying the JWT using the secret key stored in environment variables
    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);
    // Storing the decoded JWT payload in the request object for further use
    req.user = decode;
    // If JWT is valid, move on to the next middleware or request handler
    next();
  } catch (error) {
    // If there is an error during the authentication process, return 401 Unauthorized response
    return res.status(401).json({
      success: false,
      message: `Something Went Wrong While Validating the Token`,
      error: error,
    });
  }
};
const isStudent = async (req, res, next) => {
  try {
    const accountType = req.user.accountType;
    // Storing the decoded JWT payload in the request object for further use
    if (accountType !== "Student") {
      return res.status(401).json({
        success: false,
        message: "This is a Protected Route for Students",
      });
    }
    // If JWT is valid, move on to the next middleware or request handler
    next();
    // const userDetails = await User.findOne({ email: req.user.email });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `User Role Can't be Verified` });
  }
};
const isAdmin = async (req, res, next) => {
  try {
    const userDetails = await User.findOne({ email: req.user.email });

    if (userDetails.accountType !== "Admin") {
      return res.status(401).json({
        success: false,
        message: "This is a Protected Route for Admin",
      });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `User Role Can't be Verified` });
  }
};

const isInstructor = async (req, res, next) => {
  try {
    const accountType = req.user.accountType;
    if (accountType !== "Instructor") {
      return res.status(401).json({
        success: false,
        message: "This is a Protected Route for Instructor",
      });
    }
    next();
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: `User Role Can't be Verified` });
  }
};

module.exports = { auth, isStudent, isAdmin, isInstructor };
