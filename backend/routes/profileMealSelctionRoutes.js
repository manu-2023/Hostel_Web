const express = require("express");
const router = express.Router();
const {
  getResidentById,
  getMealSelectionByResidentId,
} = require("../controller/profileMealSelectionController");

router.get("/resident/:residentID", getResidentById);

// Route to get meal selection details by resident ID
router.get("/mealSelection/:residentID", getMealSelectionByResidentId);
module.exports = router;