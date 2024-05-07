// const User = require("../models/studentmodel.js");
// const bcrypt = require("bcrypt");

// async function createAdmin() {
//   try {
//     const existingUser = await User.findOne({ email: "nishatalam@gmail.com" });

//     if (existingUser) {
//       console.log("User Already Exists");
//       return; // Exit the function if the user already exists
//     }

//     const newAdmin = new User({
//       email: "nishatalam@gmail.com",
//       firstName: "Nishat",
//       lastName: "Alam",
//       password: await bcrypt.hash("Nishatalam@123", 10),
//       role: "Admin",
//     });

//     await newAdmin.save();
//     console.log("Admin Account Created Successfully");
//   } catch (err) {
//     console.error(err);
//     throw new Error("User cannot be registered. Please try again later");
//   }
// }

// module.exports = createAdmin;
