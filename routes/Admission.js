const express = require("express");
const router = express.Router();

const { auth } = require("../middlewares/auth.js");

const {
  newAdmission,
  getNewAdmissionById,
  get_new_admission,
  delete_newadmission,
  update_New_Admission,

} = require("../controllers/newAdmission.js");


router.post("/newAdmission",auth, newAdmission);

// router.get("/getnewadmissionId", getNewAdmissionById);

router.post("/getnewadmissionId",auth,getNewAdmissionById);

router.get("/get_new_admission", get_new_admission);

router.delete("/delete_newadmission/:id", delete_newadmission);

router.put("/update_New_Admission/:id", update_New_Admission);

module.exports = router;