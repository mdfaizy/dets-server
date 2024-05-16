const User = require("../models/studentmodel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const OTP = require("../models/OTPs")
const otpGenerator = require('otp-generator');
require("dotenv").config(); 
const EmailService = require('../service/EmailDetails.js'); 
const emailService = new EmailService();
//send otp
exports.sendotp = async (req, res) => {
  try {
    const { email } = req.body;
    console.log(email);

    // Check if user is already present
    const checkUserPresent = await User.findOne({ email });

    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: `User is Already Registered`,
      });
    }

    // Generate OTP
    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });

    // Store OTP in the database
    await OTP.create({ email, otp });

    // Send OTP via email
    emailService.sendEmailVerificationCode(email, otp);

    console.log(email, otp);
    
    return res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp, 
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};
// exports.signup = async (req, res) => {
//     try {

//       // Destructure fields from the request body
//       const {
//         firstName,
//         lastName,
//         email,
//         password,
//         confirmPassword,
//         accountType,
//         instructorKey,
//         otp,
//       } = req.body

//       console.log(firstName, lastName, email, password, confirmPassword,otp,instructorKey,);
//       // Check if All Details are there or not
//     //   if (
//     //     !firstName ||
//     //     !lastName ||
//     //     !email ||
//     //     !password ||
//     //     !confirmPassword ||
//     //     !otp
//     //   ) {
//     //     return res.status(403).send({
//     //       success: false,
//     //       message: "All Fields are required",
//     //     })
//     //   }
//     //   // Check if password and confirm password match
//       if (password !== confirmPassword) {
//         return res.status(400).json({
//           success: false,
//           message:
//             "Password and Confirm Password do not match. Please try again.",
//         })
//       }
  
//       // Check if user already exists
//       const existingUser = await User.findOne({ email })
//       if (existingUser) {
//         return res.status(400).json({
//           success: false,
//           message: "User already exists. Please sign in to continue.",
//         })
//       }


//       // if (accountType === "Instructor" && instructorKey !== "ukdets@#1234") {
//       //   return res.status(403).json({
//       //     success: false,
//       //     message: "Instructor key is incorrect",
//       //   });
//       // }
//       if (accountType === "Instructor" && instructorKey !== "ukdets@#1234") {
//         return res.status(403).json({
//           success: false,
//           message: "Instructor key is incorrect",
//         });
//       }
  
//       // Find the most recent OTP for the email
//       const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1)
//       console.log(response)
//       if (response.length === 0) {
//         // OTP not found for the email
//         return res.status(400).json({
//           success: false,
//           message: "The OTP is not valid",
//         })
//       } else if (otp !== response[0].otp) {
//         // Invalid OTP
//         return res.status(400).json({
//           success: false,
//           message: "The OTP is not valid",
//         })
//       }
  
//       // Hash the password
//       const hashedPassword = await bcrypt.hash(password, 10)
  
  

//       // if (accountType === "Instructor" && instructorKey !== "ukdets@#1234") {
//       //   return res.status(403).json({
//       //     success: false,
//       //     message: "Instructor key is incorrect",
//       //   });
//       // }
      
//       const user = await User.create({
//         firstName,
//         lastName,
//         email,
//         password: hashedPassword,
//         accountType,
       
//         instructorKey,
//         image: `https://api.dicebear.com/6.x/initials/svg?seed=${firstName} ${lastName}&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600`,
//       })
  
//       return res.status(200).json({
//         success: true,
//         user,
//         message: "User registered successfully",
//       })
//     } catch (error) {
//       console.error(error)
//       return res.status(500).json({
//         success: false,
//         message: "User cannot be registered. Please try again.",
//       })
//     }
//   }



exports.signup = async (req, res) => {
  try {
    // Destructure fields from the request body
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      accountType,
      instructorKey,
      otp,
    } = req.body;

    

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Password and Confirm Password do not match. Please try again.",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    // Check if account type is Instructor and validate the instructor key
    if (accountType === "Instructor" && instructorKey === "ukdets@#1234") {
      return res.status(403).json({
        success: false,
        message: "Instructor key is incorrect",
      });
    }

    // Find the most recent OTP for the email
    const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    console.log(response);
    if (response.length === 0) {
      // OTP not found for the email
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    } else if (otp !== response[0].otp) {
      // Invalid OTP
      return res.status(400).json({
        success: false,
        message: "The OTP is not valid",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      accountType,
      instructorKey,
      image: `https://api.dicebear.com/6.x/initials/svg?seed=${firstName} ${lastName}&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600`,
    });

    return res.status(200).json({
      success: true,
      user,
      message: "User registered successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

// Login controller for authenticating users
exports.login = async (req, res) => {
    try {
      // Get email and password from request body
      const { email, password } = req.body
      console.log(email);
  
      // Check if email or password is missing
    //   if (!email || !password) {
    //     // Return 400 Bad Request status code with error message
    //     return res.status(400).json({
    //       success: false,
    //       message: `Please Fill up All the Required Fields`,
    //     })
    //   }
    if (email === process.env.admin_email && password === process.env.admin_password) {
      return res.cookie("token", process.env.admin_token).status(200).json({
        success: true,
        token: process.env.admin_token,
        message: "Admin logged in successfully",
      });
    }
      // Find user with provided email
      const user = await User.findOne({ email });
  
      // If user not found with provided email
      if (!user) {
        // Return 401 Unauthorized status code with error message
        return res.status(401).json({
          success: false,
          message: `User is not Registered with Us Please SignUp to Continue`,
        })
      }
  
      // Generate JWT token and Compare Password
      if (await bcrypt.compare(password, user.password)) {
        let token;
        // const token = jwt.sign(
        //   { email: user.email, id: user._id, role: user.role },
        //   process.env.JWT_SECRET,
        //   {
        //     expiresIn: "24h",
        //   }
        // )

        if (user.accountType === "Instructor" &&user.instroctorkey===process.env.instructor_key) {
          // Generate token for instructor
          token = jwt.sign({ role: "Instructor" }, process.env.JWT_SECRET, {
            expiresIn: "1d",
          });
        } else {
          // Generate default token for other account types
          token = jwt.sign(
              { email: user.email, id: user._id, role: user.role },
              process.env.JWT_SECRET,
              {
                expiresIn: "24h",
              }
            )
        }
  
        // Save token to user document in database
        user.token = token
        user.password = undefined
        // Set cookie for token and return success response
        const options = {
          expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
          httpOnly: true,
        }
        res.cookie("token", token, options).status(200).json({
          success: true,
          token,
          user,
          message: `User Login Success`,
        })
      } else {
        return res.status(401).json({
          success: false,
          message: `Password is incorrect`,
        })
      }
    } catch (error) {
      console.error(error)
      // Return 500 Internal Server Error status code with error message
      return res.status(500).json({
        success: false,
        message: `Login Failure Please Try Again`,
      })
    }
  }