const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth.js");
const {
  pg_course,
  get_pg_course_byId,
  getstudent_profile,
  get_all_course_student,
  delete_id_pgstudent,
  update_pg_course,
} = require("../controllers/pgcource");

router.post("/pg_cource",auth, pg_course);
router.get("/getstudent_profile",auth,getstudent_profile);
router.get("/getPgCourseById/:id",auth, get_pg_course_byId);
router.get("/get_all_pgcource_student", get_all_course_student);
router.delete("/delete_id_pgstudent/:id", delete_id_pgstudent);
router.put("/update-pgCourse-By-id/:id", update_pg_course);

module.exports = router;
