const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
	user: {
		type: Schema.Types.ObjectID,
		required: true,
		ref: 'User'
	},
	year:{
		type: string,
		required: true
	},
	institution:{
		type:  string,
		required: true
	}
		
}, {
  timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

