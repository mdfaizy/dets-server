// const { compare } = require("bcrypt");
const User = require("../models/studentmodel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Login
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all the details carefully",
      });
    }
    
    if(email==process.env.admin_email&&password==process.env.admin_password){
      return  res.cookie("token", process.env.admin_token).status(200).json({
        success: true,
        token:process.env.admin_token,
       message: "User logged in successfully",
      });

    }
    // check for register user
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User does not exist",
      });
    }

    // Verify password & generate a JWT token

    const payload = {
      email: user.email,
      id: user._id,
    };

    if (await bcrypt.compare(password, user.password)) {
      // password match
      let token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      console.log("the Token", token);
      user = user.toObject();
      user.token = token;
      user.password = undefined;

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User logged in successfully",
      });
    } else {
      // password not match
      return res.status(403).json({
        success: false,
        message: "Password does not match",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Login false",
    });
  }
};

// const getsiginById = async (req, res) => {
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
//     let userdata = await User.findOne({ user: tokendata.id });
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


const getsigin_By_Id = async (req, res) => {
  try {
    const token = req.cookies.token || req.body.token;
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Token missing",
      });
    }

    let tokendata = {};
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("JWT verification failed:", err);
        return res.status(403).json({
          success: false,
          message: "Unauthorized: Invalid token",
        });
      } else {
        console.log("Decoded JWT payload:", decoded);
        tokendata = decoded;
        // Token is valid, handle the decoded payload
      }
    });

    // Find the user by ID in the User model
    let userdata = await User.findOne({ _id: tokendata.id });
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

// module.exports = { getsiginById };


module.exports = { signin,getsigin_By_Id };
