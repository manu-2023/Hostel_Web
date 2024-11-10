const mongoose = require("mongoose");

const mealSelectionSchema = new mongoose.Schema({
  residentName: { type: String, required: true },
  residentId: { type: String, required: true },
  bookedDay: { type: String, required: true }, // Consider changing to Date if you're storing actual dates
  selection: {
    type: String,
    enum: ["Yes", "No", "Yes I will Eat", "No food selected"], // Add any additional valid options here
    required: true,
  },
  breakfastDish: {
    type: String,
    required: function () {
      return this.selection === "Yes I will Eat";
    },
  },
  lunchDish: {
    type: String,
    required: function () {
      return this.selection === "Yes I will Eat";
    },
  },
  dinnerDish: {
    type: String,
    required: function () {
      return this.selection === "Yes I will Eat";
    },
  },
});

// Create the MealSelection model
const MealSelection = mongoose.model("MealSelection", mealSelectionSchema);

module.exports = MealSelection;