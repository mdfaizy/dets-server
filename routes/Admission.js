const express = require("express");
const router = express.Router();
const { auth, isStudent } = require("../middlewares/auth.js");
const {
  newAdmission,
  getNewAdmissionById,
  get_new_admission,
  delete_newadmission,
  update_New_Admission,
  get_student_profile,
} = require("../controllers/newAdmission.js");

router.post("/newAdmission", auth, isStudent, newAdmission);
router.get("/get_Profile", auth, get_student_profile);
router.get("/getnewadmissionId/:id", auth, getNewAdmissionById);
router.get("/get_new_admission", get_new_admission);
router.delete("/delete_newadmission/:id", delete_newadmission);
router.put("/update_Admission_form_data/:id", update_New_Admission);

module.exports = router;
