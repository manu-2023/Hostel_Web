const express = require("express");
const router = express.Router();
const {
  saveMealSelection,
} = require("../controller/mealSelectionController");
const { incrementCount } = require("../controller/mealCountController");

router.post("/save", saveMealSelection);
router.post("/increment", incrementCount);

module.exports = router;