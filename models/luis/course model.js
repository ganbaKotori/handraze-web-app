const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
	question: {
		type: Schema.Types.ObjectID,
		required: true,
		ref: 'Question'
	},
	topic:{
		type: string
	}
	code:{
		type: string,
		required: true
	},
	classTitle:{
		type: string,
		required: true
	},
	classDescription:{
		type: string,
		maxlength: 50,
		required: true
	},
	courseDate:{
		type: date,
		default: Date.now
	},
	weekDay:{
		type: string,
		required: true
	},
	classDuration:{
		type: int,
		required: true
	},
	c_location:{
		type: string,
		required: true
	},
	sectionNum:{
		type: int,
		required: true
	}
		
}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;

