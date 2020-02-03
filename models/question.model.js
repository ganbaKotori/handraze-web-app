const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const questionSchema = new Schema({
	question:{
		type: string, 
		required: true
	},
	dateSubmitted:{
		type: date,
		default: Date.now,
	}
		
}, {
  timestamps: true,
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;

