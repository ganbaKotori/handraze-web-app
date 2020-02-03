const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lectureSchema = new Schema({
	question: {
		type: Schema.Types.ObjectID,
		required: true,
		ref: 'Question'
	},
	dateLecture:{
		type: Date,
		default: Date.now
	},
	liveAnswer:{
		type: String
	}

},
{
  timestamps: true,
});


const Lecture = mongoose.model('Lecture', lectureSchema);

module.exports = Lecture;
