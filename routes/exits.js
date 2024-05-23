const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth.js");

const {
  exitStudent,
  get_exitstudent,
  get_all_exit_student,
  delete_id_exitstudent,
  getStudentProfile,
  updateExitStudentById
} = require("../controllers/exitstudent.js");
router.post("/exitStudent" ,auth,exitStudent);
router.get("/getStudent",auth,getStudentProfile);
router.get("/getExitStudentByID/:id", get_exitstudent);
router.get("/get_all_exit_student", get_all_exit_student);

router.delete("/delete_id_exitstudent/:id", delete_id_exitstudent);
router.put("/updateExitStudentById/:id",updateExitStudentById);

module.exports = router;
