const MealsCount = require("../models/mealCount");

function getStartOfWeek(date) {
  const day = date.getDay();
  const diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is Sunday
  const startOfWeek = new Date(date.setDate(diff));
  startOfWeek.setHours(0, 0, 0, 0); // set time to 00:00:00 for consistency
  return startOfWeek;
}

const incrementCount = async (req, res) => {
  console.log("Increment count route hit with data:", req.body);
  const { day } = req.body; // Get the day from the request

  try {
    // Find the current week data
    const currentDate = new Date();
    const weekStartDate = getStartOfWeek(currentDate); // Ensure this function is implemented

    // Find existing meal counts for the week
    const mealsCount = await MealsCount.findOne({ weekStartDate });

    if (!mealsCount) {
      // If no data exists for the week, create a new entry with initialized counts
      const newMealsCount = new MealsCount({
        weekStartDate,
        counts: {
          Monday: 0,
          Tuesday: 0,
          Wednesday: 0,
          Thursday: 0,
          Friday: 0,
          Saturday: 0,
          Sunday: 0,
        },
      });

      // Increment the count for the specified day
      newMealsCount.counts[day] = 1; // Set count for the specified day to 1
      await newMealsCount.save();
      return res
        .status(201)
        .json({ message: "Meal count created and updated." });
    }

    // Increment the count for the specified day
    mealsCount.counts[day]++;
    await mealsCount.save();
    res.status(200).json({ message: "Meal count updated successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating meal count." });
  }
};

module.exports = { incrementCount };