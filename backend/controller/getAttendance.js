const Attendance = require('../models/mealCount');

const getAllAttendance = async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find();
        res.json(attendanceRecords);
    } catch (error) {
        res.status(404).json({ message: 'Something went wrong' });
    }
};

module.exports = {
    getAllAttendance,
};
