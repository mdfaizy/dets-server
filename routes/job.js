const express = require("express");
const router = express.Router();
const { auth,isInstructor } = require("../middlewares/auth");
const {job,get_job_student,get_all_Job_student,delete_id_jobstudent,update_job_cource}=require("../controllers/jobDetails");
router.post("/job", auth,job);
router.get("/getJob_ById/:id",get_job_student);
router.get("/get_all_Job_student", get_all_Job_student);
router.delete("/delete_id_jobstudent/:id", delete_id_jobstudent);
router.put("/update_job_cource", update_job_cource);

module.exports = router;


