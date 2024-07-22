const express = require("express");
const router = express.Router();
const {
  auth,
  isStudent,
  isAdmin,
  isInstructor,
} = require("../middlewares/auth");
const {
  job,
  get_job_student,
  get_student_profile,
  get_all_Job_student,
  delete_id_jobstudent,
  update_job_form_data,
  getJobStudentByOne
} = require("../controllers/jobDetails");


router.post("/job", auth, isStudent, job);
router.get("/getJobStudentByOne",auth,getJobStudentByOne)
// router.get("/getJob_ById/:id",get_job_student);
router.get("/getJob_ById/:id", auth, get_job_student);
router.get("/get_Profile", auth, get_student_profile);

router.get("/get_all_Job_student", get_all_Job_student);
router.delete("/delete_id_jobstudent/:id", delete_id_jobstudent);
router.put("/update_job_form/:id", update_job_form_data);

module.exports = router;
