const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { collection: 'Admin' });

AdminSchema.pre('save',function(next){
    this._id=this.email;
    next();
})

module.exports = mongoose.model('Admin', AdminSchema);
