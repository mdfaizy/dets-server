const cors = require("cors");
const express = require("express");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const error=require('./middlewares/error.js');
const app = express();
require("dotenv").config();
//middleware  add

app.use(express.json());

app.use(bodyParser.json()); // Parse JSON bodies
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(error);
app.use(cors());
app.use(cors({
  origin: 'https://faizy-react-dets--remarkable-croissant-46bc60.netlify.app/',
  credentials: true,
}));

app.use(cookieParser());

const User = require("./models/studentmodel.js");
//routes

const signup = require("./routes/studentroute.js");
const signin = require("./routes/studentroute.js");
const verify_email = require("./routes/studentroute.js");
const forgotpassword = require("./routes/studentroute.js");
const resetpassword = require("./routes/studentroute.js");

const userRoute=require("./routes/User.js");
const newStudent = require("./routes/Admission");
const exitstudent = require("./routes/exits.js");
const PgCourse = require("./routes/pgcourse");
const Job = require("./routes/job");
const Feedback=require("./routes/Feedback.js");
const profileRoutes = require("./routes/Profile");



const getsigin_ById = require("./routes/studentroute.js");

require("./config/dbconnect").connect();

//cloud se connect
// const cloudinary = require("./config/cloudinary.js");
// cloudinary.cloudinaryConnect();
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use("/api/v1/auth", userRoute);
app.use("/api/v1", signup);
app.use("/api/v1", signin);

app.use("/api/v1", verify_email);
app.use("/api/v1", forgotpassword);
app.use("/api/v1", resetpassword);
app.use("/api/v1/profile", profileRoutes);


//new Student
app.use("/api/v1/student", newStudent);

app.use("/api/v1/exit", exitstudent);
app.use("/api/v1/pgcourse", PgCourse);
app.use("/api/v1/job", Job);

app.use("/api/v1/feedback",Feedback)


app.use("/api/v1", getsigin_ById);

app.get("/allstudents", async (req, res) => {
  try {
    const users = await User.find(); // Retrieve all users from the database
    // If no users found
    if (!users || users.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "No users found" });
    }
    // If users found, respond with the user data
    res.status(200).json({ success: true, users });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve users" });
  }
});
app.listen(PORT, () => {
  console.log(`Example app listening  port ${PORT}`);
});
