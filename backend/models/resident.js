const mongoose = require("mongoose");

const residentSchema = new mongoose.Schema({
    _id: { type: String },
    residentname: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    phoneNo: { type: String, required: true },
    residentID: { type: String, required: true, unique: true },
});

residentSchema.pre('save', function (next) {
    this._id = this.username;
    next();
});

const Resident = mongoose.models.Resident || mongoose.model("Resident", residentSchema);
    
module.exports = Resident;
