// const otpTemplate = (otp) => {
// 	return `<!DOCTYPE html>
// 	<html>
	
// 	<head>
// 		<meta charset="UTF-8">
// 		<title>OTP Verification Email</title>
// 		<style>
// 			body {
// 				background-color: #ffffff;
// 				font-family: Arial, sans-serif;
// 				font-size: 16px;
// 				line-height: 1.4;
// 				color: #333333;
// 				margin: 0;
// 				padding: 0;
// 			}
	
// 			.container {
// 				max-width: 600px;
// 				margin: 0 auto;
// 				padding: 20px;
// 				text-align: center;
// 			}
	
// 			.logo {
// 				max-width: 200px;
// 				margin-bottom: 20px;
// 			}
	
// 			.message {
// 				font-size: 18px;
// 				font-weight: bold;
// 				margin-bottom: 20px;
// 			}
	
// 			.body {
// 				font-size: 16px;
// 				margin-bottom: 20px;
// 			}
	
// 			.cta {
// 				display: inline-block;
// 				padding: 10px 20px;
// 				background-color: #FFD60A;
// 				color: #000000;
// 				text-decoration: none;
// 				border-radius: 5px;
// 				font-size: 16px;
// 				font-weight: bold;
// 				margin-top: 20px;
// 			}
	
// 			.support {
// 				font-size: 14px;
// 				color: #999999;
// 				margin-top: 20px;
// 			}
	
// 			.highlight {
// 				font-weight: bold;
// 			}
// 		</style>
	
// 	</head>
	
// 	<body>
// 		<div class="container">
			
// 			<div class="message">OTP Verification Email</div>
// 			<div class="body">
// 				<p>Dear User,</p>
// 				<p>Thank you for registering with User. To complete your registration, please use the following OTP
// 					(One-Time Password) to verify your account:</p>
// 				<h2 class="highlight">${otp}</h2>
// 				<p>This OTP is valid for 5 minutes. If you did not request this verification, please disregard this email.
// 				Once your account is verified, you will have access to our platform and its features.</p>
// 			</div>

// 		</div>
// 	</body>
	
// 	</html>`;
// };
// module.exports = otpTemplate;






// emailVerification.js
const otpTemplate = (url, email) => {
	return `
	  <!DOCTYPE html>
	  <html>
	  
	  <head>
		  <meta charset="UTF-8">
		  <title>Otp Email Verify...</title>
		  <style>
			   body {
				   background-color: #ffffff;
				   font-family: Arial, sans-serif;
				   font-size: 16px;
				   line-height: 1.4;
				   color: #333333;
				   margin: 0;
				   padding: 0;
			   }
  
			   .container {
				   max-width: 600px;
				   margin: 0 auto;
				   padding: 20px;
				   text-align: center;
			   }
  
			   .logo {
				   max-width: 200px;
				   margin-bottom: 20px;
			   }
  
			   .message {
				   font-size: 18px;
				   font-weight: bold;
				   margin-bottom: 20px;
			   }
  
			   .body {
				   font-size: 16px;
				   margin-bottom: 20px;
			   }
  
			   .cta {
				   display: inline-block;
				   padding: 10px 20px;
				   background-color: #FFD60A;
				   color: #000000;
				   text-decoration: none;
				   border-radius: 5px;
				   font-size: 16px;
				   font-weight: bold;
				   margin-top: 20px;
			   }
  
			   .support {
				   font-size: 14px;
				   color: #999999;
				   margin-top: 20px;
			   }
			   .highlight {
				   font-weight: bold;
			   }
			   .highlight-yellow {
				  color: yellow;
			  }
		   </style>
	  
	  </head>
	  
	  <body>
		  <div class="container">
			  
			  <div class="message">Please verify your email...</div>
			  <div>
			 
			  </div>
			  <div class="body">
				  <p>Please verify your email address. We've sent a confirmation email to:</p>
				  <p>${email}</p>
				  <p>Click the confirmation link in that email to begin using Dribbble.</p>
				  <a href="${url}" class="cta">Verify Email</a>
				  <p>Didn't receive the email? Check your Spam folder, it may have been caught by a filter. If you still don't see it, you can <span>resend the confirmation email.</span></p>
				  <p>Wrong email address? <a href="https://aquamarine-choux-e4af92.netlify.app/" class="highlight-yellow">Change it.</a></p>
  
  
				  <p>Wrong email address? <a href="https://www.flipkart.com/all/~cs-89a4af89beda2604cb8435b235dee6f1/pr?sid=clo,ash,ank,edy&marketplace=FLIPKART&restrictLocale=true" class="highlight-yellow">Change it.</a></p>
  
  </div>
		  </div>
	  </body>
	  
	  </html>
	  `;
  };
  
  module.exports = otpTemplate;
  