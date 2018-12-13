const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FeedbackSchema = new Schema({
       
    feedback: {
        type: String,
        required: [true, 'Name Field is Required']
    }
});

var Feedback = mongoose.model('Feedback', FeedbackSchema);



module.exports = Feedback;
