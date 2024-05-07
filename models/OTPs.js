const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({
	email: {
		type: String,
		// required: true,
	},
	otp: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 5, // The document will be automatically deleted after 5 minutes of its creation time
	},
    
});

// Define a function to send emails


const OTP = mongoose.model("OTP", OTPSchema);

module.exports = OTP;















// const mongoose = require("mongoose");

// const OTPSchema = new mongoose.Schema({
//   email: {
//     type: String,
//   },
//   otp: {
//     type: String,
//   },
//   create: {
//     type: Date,
//     default: Date.now(),
//     expires: 5 * 60,
//   },
// });

// //functions to send to emails

// async function sendVerificationEmail(email,otp) {
//   try{
//         const mailResponse = await mailSender(email,"Verification Email From StudyNoation",otp);
//         console.log("Email sent Successfully",mailResponse);

//   }
//   catch(error){
//     console.log("Error sending Email",error);
//     throw error;
// }

// }

// OTPSchema.pre("save", async function(next) {
//   await sendVerificationEmail(this.email,this.otp);
//   next();
// })

// module.exports = mongoose.module("Otp", OTPSchema);
