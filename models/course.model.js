const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
	//question: {
		//type: Schema.Types.ObjectID,
		//required: true,
		//ref: 'Question'
	//},
	code:{
		type: String,
		required: true
	},
	classTitle:{
		type: String,
		required: true
	},
	classDescription:{
		type: String,
		maxlength: 50,
		required: true
	},
	courseDate:{
		type: Date,
		default: Date.now
	},
	weekDay:{
		type: String,
		enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
		required: true
	},
	classDuration:{
		type: Number,
		required: true
	},
	c_location:{
		type: String,
		required: true
	},
	sectionNum:{
		type: Number,
		required: true
	}

}, {
  timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
