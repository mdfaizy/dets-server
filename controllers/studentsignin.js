// // const { compare } = require("bcrypt");
const User = require("../models/studentmodel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();
const crypto = require('crypto');
const router= require("../routes/studentroute.js");
const signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill in all the details carefully",
      });
    }

    // Check for admin
    if (email === process.env.admin_email && password === process.env.admin_password) {
      return res.cookie("token", process.env.admin_token).status(200).json({
        success: true,
        token: process.env.admin_token,
        message: "Admin logged in successfully",
      });
    }

    // Check for registered user
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
      // Password match
      let token;

      if (user.accountType === "Instructor" &&user.instroctorkey===process.env.instructor_key) {
        // Generate token for instructor
        token = jwt.sign({ ...payload, role: "Instructor" }, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
      } else {
        // Generate default token for other account types
        token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1d",
        });
      }

      console.log("the Token", token);
      user = user.toObject();
      user.token = token;
      user.password = undefined;

      // const options = {
      //   expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      //   httpOnly: true,
      // };

      // res.cookie("token", token, options).status(200).json({
      //   success: true,
      //   token,
      //   user,
      //   message: "User logged in successfully",
      // });

      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true, // Add httpOnly flag to make the cookie accessible only through HTTP(S) protocol
      };
      
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: "User logged in successfully",
      });
    } else {
      // Password not match
      return res.status(403).json({
        success: false,
        message: "Password does not match",
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};






const getsigin_By_Id = async (req, res) => {
  try {
    const id = req.params.id;
    console.log("id", id);

    
    // Finding user by ID
    const userdata = await User.findById({ _id: id });;

    console.log("userdata", userdata);

    if (!userdata) {
      return res.status(404).json({
        success: false,
        message: "No Data Found with Given Id",
      });
    }

    // If user data found, send a success response
    res.status(200).json({
      success: true,
      data: userdata,
      message: "Success",
    });
  } catch (error) {
    // If any error occurs during the try block, catch it here
    console.error("Error:", error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server error",
    });
  }
};






// const getsigin_By_Id = async (req, res) => {
//   try {
//     const id = req.params.id;
//     console.log("id",id);
//     const userData = await User.findById({ _id: id });
// console.log(userData);
//     if (!userData) {
//       return res.status(404).json({
//         success: false,
//         message: "No Data Found with Given Id",
//       });
//     }
//     res.status(200).json({
//       success: true,
//       data: userData,
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



// const getsigin_By_Id = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     // Use populate to get the posts, comments, and likes data
//     const user = await User.findById(userId);
//     console.log("user",user);
//       // .populate("posts") // Assuming 'posts' is the path to the Posts collection
//       // .populate("comments") // Assuming 'comments' is the path to the Comments collection
//       // .populate("likes"); // Assuming 'likes' is the path to the Likes collection

//     if (!user) {
//       return res.status(404).json({
//         message: "User not found",
//         success: false,
//       });
//     }

//     // console.log(user.image);

//     res.status(200).json({
//       message: "User found successfully",
//       success: true,
//       user,
//     });
//   } catch (err) {
//     res.status(500).json({
//       message: "Internal Server Error",
//       success: false,
//       error: err.message,
//     });
//   }
// };







const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an email address',
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    // Generate a random reset token
    const resetToken = crypto.randomBytes(20).toString('hex');
    // Set reset token and expiration in the user object
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();
    // Send email with reset link
    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.SENDER_EMAIL, // Update with your email
    //     pass: process.env.SENDER_PASSWORD, // Update with your email password
    //   },
    // });

    // const mailOptions = {
    //   from: process.env.SENDER_EMAIL, // Update with your email
    //   to: user.email,
    //   subject: 'Password Reset',
    //   text: `Click on the following link to reset your password: http://localhost:5173/reasetpassword/${resetToken}`,
    // };

    // transporter.sendMail(mailOptions, (error, info) => {
    //   if (error) {
    //     return res.status(500).json({
    //       success: false,
    //       message: 'Error sending email',
    //     });
    //   }
    //   res.json({ success: true, message: 'Email sent successfully' });
    // });




    // const transporter = nodemailer.createTransport({
    //   service: 'gmail',
    //   auth: {
    //     user: process.env.SENDER_EMAIL,
    //     pass: process.env.SENDER_PASSWORD,
    //   },
    //   debug: true, // Enable debug mode
    // });
    //  const mailOptions = {
    //   from: process.env.SENDER_EMAIL, // Update with your email
    //   to: user.email,
    //   subject: 'Password Reset',
    //   text: `Click on the following link to reset your password: http://localhost:5173/reasetpassword/${resetToken}`,
    // };
    // transporter.verify(mailOptions,function(error, success) {
    //   if (error) {
    //     console.error('Transporter setup failed:', error);
    //     return res.status(500).json({
    //       success: false,
    //       message: 'Error setting up email transporter',
    //     });
    //   }
    //   console.log('Server is ready to send emails:', success);
    // });
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASSWORD,
      },
      debug: true, // Enable debug mode
    });
    
    const mailOptions = {
      from: process.env.SENDER_EMAIL,
      to: user.email,
      subject: 'Password Reset',
      text: `Click on the following link to reset your password: http://localhost:5173/reasetpassword/${resetToken}`,
    };
    
    transporter.verify(function (error, success) {
      if (error) {
        console.error('Transporter setup failed:', error);
        return res.status(500).json({
          success: false,
          message: 'Error setting up email transporter',
        });
      }
      console.log('Server is ready to send emails:', success);
    
      // Now that the transporter is verified, you can send the email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          return res.status(500).json({
            success: false,
            message: 'Error sending email',
          });
        }
        res.json({ success: true, message: 'Email sent successfully' });
      });
    });
    
    


  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Forgot password failed',
    });
  }
};


const resetPassword = async (req, res) => {
  try {
    const { token, password } = req.body;

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired token',
      });
    }

    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    res.json({ success: true, message: 'Password reset successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Reset password failed',
    });
  }
};




module.exports = { signin,getsigin_By_Id,forgotPassword, resetPassword};
