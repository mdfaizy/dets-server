const mongoose = require('mongoose');
const studentSchema=mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
   
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    resetPasswordToken: {
        type: String,
        default: null,
      },
      resetPasswordExpires: {
        type: Date,
        default: null,
      },
})

module.exports = mongoose.model("User", studentSchema);
