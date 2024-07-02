
const express = require('express');
const multer = require('multer');

const router = express.Router();
const { auth, isStudent } = require("../middlewares/auth.js");
const {
  newAdmission,
  getNewAdmissionById,
  get_new_admission,
  delete_newadmission,
  update_New_Admission,
  get_student_profile,
  getNewAdmissionByOne
} = require("../controllers/newAdmission.js");

// ********************************************************************************************************
router.post("/newAdmission", auth, isStudent, newAdmission);

// const upload = multer({ dest: 'uploads/' });

// router.post('/newAdmission',auth, upload.fields([
//   { name: 'passport_Photo_Size', maxCount: 1 },
//   { name: 'aadhar_card_file', maxCount: 1 },
  // { name: 'your_Residence_Certificate', maxCount: 1 },
  // { name: 'sc_MarksheetFile', maxCount: 1 },
  // { name: 'antiragging', maxCount: 1 },
  // { name: 'rankcardFile', maxCount: 1 },
  // { name: 'signature_or_Thumb', maxCount: 1 },
// ]), newAdmission);
router.get("/get_admission_form",getNewAdmissionByOne)
router.get("/get_Profile", auth, get_student_profile);
router.get("/getnewadmissionId/:id", auth, getNewAdmissionById);
router.get("/get_new_admission", get_new_admission);
router.delete("/delete_newadmission/:id", delete_newadmission);
router.put("/update_Admission_form_data/:id", update_New_Admission);

module.exports = router;
