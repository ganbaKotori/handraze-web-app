const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const instructorSchema = new Schema({
	department:{
		type: string,
		required: true
	}
		
}, {
  timestamps: true,
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
