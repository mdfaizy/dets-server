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
    accountType: {
        type: String,
        // required: true,
        enum: ['Student', 'Instructor'], // <-- Updated enum values
    },
    
    instructorKey: {
        type: String,
        default: null,
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
