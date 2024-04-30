const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth.js");

const {
  pg_cource,
  get_pg_student,
  get_all_pgcource_student,
  delete_id_pgstudent,
  update_pg_cource,
} = require("../controllers/pgcource");

router.post("/pg_cource",auth, pg_cource);
router.post("/get_pg_student", get_pg_student);
router.get("/get_all_pgcource_student", get_all_pgcource_student);
router.delete("/delete_id_pgstudent", delete_id_pgstudent);
router.put("/update_pg_cource/:id", update_pg_cource);

module.exports = router;
