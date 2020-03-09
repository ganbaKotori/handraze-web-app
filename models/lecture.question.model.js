const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const questionSchema = new Schema(
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

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
