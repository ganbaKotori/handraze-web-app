const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
	department:{
		type: string,
		required: true
	}
		
}, {
  timestamps: true,
});

