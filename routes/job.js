const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");

const {job,get_job_student,get_all_Job_student}=require("../controllers/jobDetails");


router.post("/job", job);
router.post("/get_job_student", get_job_student);
router.get("/get_all_Job_student", get_all_Job_student);




module.exports = router;
