const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lectureQuestionSchema = new Schema(
    {
        question: {
            type: String,
            required: true
        },
        dateSubmitted: {
            type: Date,
            default: Date.now
        },

        answer: [{
            type: Schema.Types.ObjectID,
            required: false,
            ref: "Answer"
        }]
    },
    {
        timestamps: true
    }
);

const lectureQuestion = mongoose.model("Question", lectureQuestionSchema);

module.exports = lectureQuestion;
