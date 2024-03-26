const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth.js");

const {
  postFeedback,
  getAllFeedback,
  getFeedbackId,
  updateFeedback,
  deleteFeedback,
} = require("../controllers/Feedback.js");
// const { route } = require("./studentroute.js");
router.post("/feedback", auth, postFeedback);
router.get("/showAllFeedback", getAllFeedback);
router.get("/oneUserFeedbackId/:id", getFeedbackId);
router.put("/updatefeedback:id", updateFeedback);
router.delete("/deleteFeedback/:id", deleteFeedback);
module.exports = router;
