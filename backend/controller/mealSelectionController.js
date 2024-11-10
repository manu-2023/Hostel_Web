const MealSelection = require("../models/mealSelection"); // Import the model

// POST endpoint for saving meal selection
const saveMealSelection = async (req, res) => {
  const {
    residentname,
    residentId,
    selectedDay,
    selection,
    breakfastDish,
    lunchDish,
    dinnerDish,
  } = req.body;

  // Log the received request body for debugging
  console.log("Received meal selection:", req.body);

  try {
    // If the selection is "Skip", set dishes to null
    const mealSelection = new MealSelection({
      residentName: residentname,
      residentId: residentId,
      bookedDay: selectedDay,
      selection,
      breakfastDish: selection === "No food selected" ? null : breakfastDish,
      lunchDish: selection === "No food selected" ? null : lunchDish,
      dinnerDish: selection === "No food selected" ? null : dinnerDish,
    });

    await mealSelection.save(); // Save the meal selection to the database
    res.status(201).json({ message: "Meal selection saved successfully!" });
  } catch (error) {
    console.error("Error saving meal selection:", error);
    res.status(500).json({ message: "Failed to save meal selection." });
  }
};

module.exports = { saveMealSelection };