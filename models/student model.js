const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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

