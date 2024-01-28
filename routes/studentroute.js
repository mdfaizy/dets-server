const express = require("express");
const router = express.Router();
// const {jobValidationRules}=require("../middlewares/jobValidation");
//import from controllers studentsignup data
const {signup} = require("../controllers/studentsignup.js");
const {signin,getsigin_By_Id,forgotPassword,resetPassword} = require("../controllers/studentsignin.js");
const {newAdmission} = require("../controllers/newAdmissionCont.js");
const {getNewAdmissionById,get_new_admission,delete_newadmission, update_New_Admission,} = require("../controllers/getNewAdmission.js");
const {exitStudent,get_exitstudent,get_all_exit_student,delete_id_exitstudent}=require("../controllers/exitstudentCont.js");
const {pg_cource,get_pg_student,get_all_pgcource_student,delete_id_pgstudent}=require("../controllers/pgcource.js");
const {job,get_job_student,get_all_Job_student} = require("../controllers/jobDetails.js");
//post data routes 
router.post("/signup", signup); 
router.post("/signin", signin);
router.post('/forgotpassword', forgotPassword);
router.post('/resetpassword', resetPassword);
router.post("/newAdmission",newAdmission);
router.post("/job", job);
router.post("/pg_cource",pg_cource);
router.post("/exitStudent",exitStudent);
router.post("/getnewadmission",getNewAdmissionById);
router.post("/get_exitstudent",get_exitstudent);
router.post("/get_pg_student",get_pg_student);
router.post("/get_job_student",get_job_student);
//get data routes
router.get('/get_new_admission',get_new_admission);
router.get('/get_all_exit_student',get_all_exit_student);
router.get('/get_all_pgcource_student',get_all_pgcource_student);
router.get('/get_all_Job_student',get_all_Job_student);

router.get('/getsigin_By_Id/:id',getsigin_By_Id);
//delete routes
router.delete("/delete_newadmission/:id", delete_newadmission);
router.delete("/delete_id_exitstudent",delete_id_exitstudent);
router.delete('/delete_id_pgstudent',delete_id_pgstudent);
//update routes

router.put("/update_New_Admission/:id", update_New_Admission,);
module.exports = router;

