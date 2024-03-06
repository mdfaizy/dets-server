const User = require("../models/studentmodel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
// exports.signup = async (req, res) => {
//   try {
//     const { firstName, lastName, email, password } = req.body;
//     // check if user already exist
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.status(400).json({
//         success: false,
//         message: "User Already Exists",
//       });
//     }

//     console.log(firstName, lastName, email, password);
//     //   Create Entry for User
//     //   let user = await User.create({
//     //       firstName,lastName,email,password
//     //   });

//     const newUser = new User({
//       firstName,
//       lastName,
//       email,
//       password,
//     });

//     // Save the user to the database
//     await newUser.save();

//     return res.status(200).json({
//       success: true,
//       message: "User Created Successfully",
//       data: newUser,
//     });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({
//       success: false,
//       message: "User cannot be register,Please try again later",
//     });
//   }
// };





require("dotenv").config()

// Sign up route handler
// exports.signup = async (req, res) => {
//     try {
//         // get data
//         const {firstName,lastName, email, password } = req.body;

//         // check if user already exist 
//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({
//                 success: false,
//                 message: "User Already Exists",
//             })
//         }

//         // Secured password 
//         let hashedPassword;
//         try {
//             hashedPassword = await bcrypt.hash(password, 10);
//         }
//         catch (err) {
//             return res.status(500).json({
//                 success: false,
//                 message: "Error in hashing password",
//             })
//         }

//         // Create Entry for User
//         let user = await User.create({
//           firstName,lastName,email,password:hashedPassword
//         });

//         return res.status(200).json({
//             success : true,
//             message : "User Created Successfully",
//             data : user
//         });
//     }
//     catch (err) {
//         console.error(err)
//         return res.status(500).json({
//             success: false,
//             message: "User cannot be register,Please try again later",
//         })
//     }
// }


// Sign up route handler
// exports.signup = async (req, res) => {
//     try {
//         // get data
//         const { firstName, lastName, email, password, accountType } = req.body;

//         // check if user already exists
//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'User Already Exists',
//             });
//         }

//         // Secured password
//         let hashedPassword;
//         try {
//             hashedPassword = await bcrypt.hash(password, 10);
//         } catch (err) {
//             return res.status(500).json({
//                 success: false,
//                 message: 'Error in hashing password',
//             });
//         }

//         // Create Entry for User
//         let user = await User.create({
//             firstName,
//             lastName,
//             email,
//             password: hashedPassword,
//             accountType,
//         });

//         return res.status(200).json({
//             success: true,
//             message: 'User Created Successfully',
//             data: user,
//         });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({
//             success: false,
//             message: 'User cannot be registered. Please try again later',
//         });
//     }
// };



// exports.signup = async (req, res) => {
//     try {
//         // get data
//         const { firstName, lastName, email, password, accountType } = req.body;

//         // check if user already exists
//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'User Already Exists',
//             });
//         }

//         // Secured password
//         let hashedPassword;
//         try {
//             hashedPassword = await bcrypt.hash(password, 10);
//         } catch (err) {
//             return res.status(500).json({
//                 success: false,
//                 message: 'Error in hashing password',
//             });
//         }

//         // Generate a specific key for Instructors
//         let instructorKey = null;
//         if (accountType === 'Instructor') {
//             instructorKey = 'ukdets@#1234';
//         }

//         // Create Entry for User
//         let user = await User.create({
//             firstName,
//             lastName,
//             email,
//             password: hashedPassword,
//             accountType,
//             instructorKey,
//         });

//         return res.status(200).json({
//             success: true,
//             message: 'User Created Successfully',
//             data: user,
//         });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({
//             success: false,
//             message: 'User cannot be registered. Please try again later',
//         });
//     }
// };

// const generateToken = (user) => {
//     const payload = {
//       userId: user._id,
//       email: user.email,
//       accountType: user.accountType, // Add the account type to the payload
//     };
  
//     const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
//     return token;
//   };

// exports.signup = async (req, res) => {
//     try {
//         // get data
//         const { firstName, lastName, email, password, confirmPassword, accountType, instructorKey } = req.body;

//         // check if user already exists
//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'User Already Exists',
//             });
//         }

//         // Check if the account type is 'Instructor' and the provided instructor key is correct
//         if (accountType === 'Instructor' && instructorKey !== 'ukdets@#1234') 
//             {
//             return res.status(403).json({
//                 success: false,
//                 message: 'Instructor key is incorrect',
//             });
//         }

//         // Secured password
//         let hashedPassword;
//         try {
//             hashedPassword = await bcrypt.hash(password, 10);
//         } catch (err) {
//             return res.status(500).json({
//                 success: false,
//                 message: 'Error in hashing password',
//             });
//         }

//         // Create Entry for User
//         let user = await User.create({
//             firstName,
//             lastName,
//             email,
//             password: hashedPassword,
//             accountType,
//             instructorKey,
//         });

//         // Generate image URL using DiceBear API
//         const imageUrl = `https://api.dicebear.com/6.x/initials/svg?seed=${firstName} ${lastName}`;
//         const token = generateToken(user);
//         // Update user's image property
//         user.image = imageUrl;
//         await user.save();

//         return res.status(200).json({
//             success: true,
//             message: 'User Created Successfully',
//             // data: user,
//             data: { user, token },

//         });
//     } catch (err) {
//         console.error(err);
//         return res.status(500).json({
//             success: false,
//             message: 'User cannot be registered. Please try again later',
//         });
//     }
// };




const generateToken = (user) => {
    const payload = {
        userId: user._id,
        email: user.email,
        accountType: user.accountType,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

exports.signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password, confirmPassword, accountType, instructorKey } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User Already Exists',
            });
        }

        if (accountType === 'Instructor' && instructorKey !== 'ukdets@#1234') {
            return res.status(403).json({
                success: false,
                message: 'Instructor key is incorrect',
            });
        }

        let hashedPassword;
        try {
            hashedPassword = await bcrypt.hash(password, 10);
        } catch (err) {
            return res.status(500).json({
                success: false,
                message: 'Error in hashing password',
            });
        }

        let user = await User.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            accountType,
            instructorKey,
        });

        const imageUrl = `https://api.dicebear.com/6.x/initials/svg?seed=${firstName} ${lastName}`;
        const token = generateToken(user);

        user.image = imageUrl;
        await user.save();

        return res.status(200).json({
            success: true,
            message: 'User Created Successfully',
            data: { user, token },
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: 'User cannot be registered. Please try again later',
        });
    }
};




// exports.signup = async (req, res) => {
//     try {
//         // get data
//         const {firstName,lastName, email, password } = req.body;

//         // check if user already exist 
//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({
//                 success: false,
//                 message: "User Already Exists",
//             })
//         }

//         // Secured password 
//         let hashedPassword;
//         try {
//             hashedPassword = await bcrypt.hash(password, 10);
//         }
//         catch (err) {
//             return res.status(500).json({
//                 success: false,
//                 message: "Error in hashing password",
//             })
//         }

//         // Create Entry for User
//         let user = await User.create({
//           firstName,lastName,email,password:hashedPassword
//         });

//         return res.status(200).json({
//             success : true,
//             message : "User Created Successfully",
//             data : user
//         });
//     }
//     catch (err) {
//         console.error(err)
//         return res.status(500).json({
//             success: false,
//             message: "User cannot be register,Please try again later",
//         })
//     }
// }