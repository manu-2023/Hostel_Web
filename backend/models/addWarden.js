const mongoose = require('mongoose');

const wardenSchema = new mongoose.Schema({
    _id: { type: String }, 
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone : { type : String,required:true},
    password :{type: String,required : true},
    address :{type : String, required:true},
    kitchendept:{type : String},
    kdeptpassword:{type : String}
});

wardenSchema.pre('save',function(next){
    this._id=this.email;
    this.kitchendept=this.email;
    this.kdeptpassword=this.password;
    next();
})

module.exports = mongoose.model('Warden', wardenSchema);

