const mongoose = require('mongoose');

// const feedbackSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         // required: true,
//         maxLength: 50,
//     },
//     description: {
//         type: String,
//         // required: true,
//         maxLength: 1000,
//     },
//     // user: {
//     //     type: mongoose.Schema.Types.ObjectId,
//     //     ref: 'User', // Assuming the model for users is named 'User'
//     //     // required: true,
//     // },
//     user: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		required: true,
// 		ref: "user",
// 	},
//     createdAt: {
//         type: Date,
//         default: Date.now,
//     },
//     updatedAt: {
//         type: Date,
//         default: Date.now,
//     },
// });

// module.exports = mongoose.model('Feedback', feedbackSchema);




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
    userName: {
        type: String,
        // required: true
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