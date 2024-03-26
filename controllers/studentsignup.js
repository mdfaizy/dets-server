const User = require("../models/studentmodel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config()
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
            image: `https://api.dicebear.com/6.x/initials/svg?seed=${firstName} ${lastName}&backgroundColor=00897b,00acc1,039be5,1e88e5,3949ab,43a047,5e35b1,7cb342,8e24aa,c0ca33,d81b60,e53935,f4511e,fb8c00,fdd835,ffb300,ffd5dc,ffdfbf,c0aede,d1d4f9,b6e3f4&backgroundType=solid,gradientLinear&backgroundRotation=0,360,-350,-340,-330,-320&fontFamily=Arial&fontWeight=600`,
        });

        // const imageUrl = `https://api.dicebear.com/6.x/initials/svg?seed=${firstName} ${lastName}`;
        const token = generateToken(user);

        // user.image = imageUrl;
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











// const User = require("../models/studentmodel.js");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const nodemailer = require('nodemailer');
// require("dotenv").config();

// // Create a nodemailer transporter
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.SENDER_EMAIL,
//       pass: process.env.SENDER_PASSWORD,
//     },
// });

// const generateToken = (user) => {
//     const payload = {
//         userId: user._id,
//         email: user.email,
//         accountType: user.accountType,
//     };

//     return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
// };

// exports.signup = async (req, res) => {
//     try {
//         const { firstName, lastName, email, password, confirmPassword, accountType, instructorKey } = req.body;

//         const existingUser = await User.findOne({ email });

//         if (existingUser) {
//             return res.status(400).json({
//                 success: false,
//                 message: 'User Already Exists',
//             });
//         }

//         if (accountType === 'Instructor' && instructorKey !== 'ukdets@#1234') {
//             return res.status(403).json({
//                 success: false,
//                 message: 'Instructor key is incorrect',
//             });
//         }

//         let hashedPassword;
//         try {
//             hashedPassword = await bcrypt.hash(password, 10);
//         } catch (err) {
//             return res.status(500).json({
//                 success: false,
//                 message: 'Error in hashing password',
//             });
//         }

//         let user = await User.create({
//             firstName,
//             lastName,
//             email,
//             password: hashedPassword,
//             accountType,
//             instructorKey,
//         });

//         // Generate verification token
//         const verificationToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

//         // Save the verification token to the user document
//         user.verificationToken = verificationToken;
//         await user.save();

//         // Send verification email
//         const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${verificationToken}`;
//         const mailOptions = {
//             from: process.env.SENDER_EMAIL,
//             to: user.email,
//             subject: 'Verify your email address',
//             html: `Click <a href="${verificationLink}">here</a> to verify your email address.`,
//         };
//         await transporter.sendMail(mailOptions);

//         // Generate JWT token
//         const token = generateToken(user);

//         // Return response
//         return res.status(200).json({
//             success: true,
//             message: 'User Created Successfully. Verification email sent.',
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
