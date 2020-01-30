const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const answerSchema = new Schema({
  answer: {
    type: String,
    required: true,
  },
  dateSubmitted: {
	  type: Date,
	  default: Date.now
  },
}, 
{
  timestamps: true,
}
);

const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
