const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/studentmodel");

// auth middleware
// exports.auth = async (req, res, next) => {
//     try {
//         // extract token
//         console.log("ga");
//         const token =
//             req.cookies.token || req.body.token || req.header('Authorization').replace('Bearer ', '');
// console.log("hiihhhhhhhhhhh",token);
//         // if token is missing, then return response
//         if (!token) {
//             return res.status(401).json({
//                 success: false,
//                 message: 'Token is missing',
//             });
//         }

//         // verify the token
//         try {
//             const decode = jwt.verify(token, process.env.JWT_SECRET);
//             console.log('decode= ', decode);
//             req.user = decode;
//         } catch (err) {
//             // verification issue
//             return res.status(401).json({
//                 success: false,
//                 message: 'Token is invalid',
//             });
//         }
//         next();
//     } catch (error) {
//         return res.status(401).json({
//             success: false,
//             message: error.message,
//         });
//     }
// };




exports.auth = async (req, res, next) => {
    try {
        // Extracting JWT from request cookies, body or header
        let token =
            req.cookies.token ||
            req.body.token ||
            (req.headers.authorization && req.headers.authorization.replace("Bearer ", ""));
        console.log("Token middleware:", token);

        // If JWT is missing, return 401 Unauthorized response
        if (!token) {
            return res.status(401).json({ success: false, message: `Token Missing` });
        }

        try {
            // Verifying the JWT using the secret key stored in environment variables
            const decode = await jwt.verify(token, process.env.JWT_SECRET);
            console.log("Decoded token:", decode);

            // Storing the decoded JWT payload in the request object for further use
            req.user = decode;

            // If JWT is valid, move on to the next middleware or request handler
            next();
        } catch (error) {
            // If JWT verification fails, return 401 Unauthorized response
            return res.status(401).json({ success: false, message: "Token is invalid" });
        }
    } catch (error) {
        // If there is an error during the authentication process, return 401 Unauthorized response
        return res.status(401).json({
            success: false,
            message: `Something Went Wrong While Validating the Token`,
        });
    }
};




// exports.auth = (req, res, next) => {
//     const token = req.cookies.token || req.body.token || req.headers.authorization?.split(" ")[1];
  
//     if (!token) {
//       return res.status(401).json({ message: "Authorization token is missing" });
//     }
  
//     jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
//       if (err) {
//         console.error("JWT verification failed:", err);
//         return res.status(401).json({ message: "Unauthorized" });
//       } else {
//         console.log("Decoded JWT payload:", decoded);
//         req.user = decoded;
//         next();
//       }
//     });
//   };









exports.isStudent = async (req, res, next) => {
    try {
        if (req.user.accountType !== 'Student') {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Students only',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again',
        });
    }
};
exports.isInstructor = async (req, res, next) => {
    try {
        if (req.user.accountType !== 'Instructor') {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Instructors only',
            });
        }

        // Check if instructor key is correct
        if (req.user.accountType === 'Instructor' && req.body.instructorKey !== 'ukdets@#1234') {
            return res.status(403).json({
                success: false,
                message: 'Instructor key is incorrect',
            });
        }

        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again',
        });
    }
};
