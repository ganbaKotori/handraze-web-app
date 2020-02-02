const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lectureSchema = new Schema({
	question: {
		type: Schema.Types.ObjectID,
		required: true,
		ref: 'Question'
	},
	dateLecture:{
		type: date,
		default: Date.now
	},
	liveAnswer:{
		type: string
		
}, {
  timestamps: true,
});

const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;

