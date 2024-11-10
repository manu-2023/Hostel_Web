const mongoose = require("mongoose");

// Define the main schema for the weekly meal count
const mealsCountSchema = new mongoose.Schema({
  weekStartDate: { type: Date, required: true, unique: true }, // Start date of the week (e.g., Monday)
  counts: {
    Monday: { type: Number, default: 0 },
    Tuesday: { type: Number, default: 0 },
    Wednesday: { type: Number, default: 0 },
    Thursday: { type: Number, default: 0 },
    Friday: { type: Number, default: 0 },
    Saturday: { type: Number, default: 0 },
    Sunday: { type: Number, default: 0 },
  },
});

const MealsCount = mongoose.model("MealsCount", mealsCountSchema);
module.exports = MealsCount;