const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
	question:{
		type: String,
		required: true
	},
	dateSubmitted:{
		type: Date,
		default: Date.now,
	}

}, {
  timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
