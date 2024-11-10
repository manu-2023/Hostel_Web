const mongoose = require('mongoose');

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
};

const attendanceSchema = new mongoose.Schema({
    _id: { type: String, required: true, unique: true }, 
    count: { type: Number, required: true }
});

attendanceSchema.pre('save', function (next) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1); 
    this._id = formatDate(tomorrow); 
    next();
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
