const mongoose = require('mongoose');


const feedbackSchema = new mongoose.Schema({
    title: {
        type: String,
        maxLength: 50,
    },
    description: {
        type: String,
        // maxLength: 1000,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        // required: true,
        ref: "User",
    },
    newadmission:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"newadmission",
    },
    rating: {
        type: Number,
        maxLength: 5,
        minLength:1,
        
    },
    descriptio: {
        type: String,
        // maxLength: 1000,
    },
    userName: {
        type: String,
        // required: true
    },
    image:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});


module.exports = mongoose.model('Feedback', feedbackSchema);








