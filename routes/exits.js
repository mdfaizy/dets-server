const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth.js");

const {
  exitStudent,
  get_exitstudent,
  get_all_exit_student,
  delete_id_exitstudent,
} = require("../controllers/exitstudent.js");
router.post("/exitStudent" ,exitStudent);
router.post("/get_exitstudent", get_exitstudent);
router.get("/get_all_exit_student", get_all_exit_student);
router.delete("/delete_id_exitstudent", delete_id_exitstudent);

module.exports = router;
