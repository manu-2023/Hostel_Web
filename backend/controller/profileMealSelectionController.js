const Resident = require("../models/resident");
const MealSelection = require("../models/mealSelection");

const getResidentById = async (req, res) => {
  console.log("RESIDENT END point checking",req.params.residentID)
  const residentId = req.params.residentID;
  console.log(residentId);
  try {
    const resident = await Resident.findOne({ residentID: residentId }); // Query by residentId
    if (!resident) {
      return res.status(404).json({ message: "Resident not found" });
    }
    res.json(resident); // Return resident data
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch meal selection details by resident ID
const getMealSelectionByResidentId = async (req, res) => {
  try {
    const residentId = req.params.residentID;
    const mealSelections = await MealSelection.find({ residentId: residentId });

    // Check if the array is empty
    if (mealSelections.length === 0) {
      return res.status(404).json({ message: "Meal selection not found" });
    }
    console.log(mealSelections)
    res.status(200).json(mealSelections);
  } catch (error) {
    console.error("Error fetching meal selection:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { getResidentById, getMealSelectionByResidentId };
