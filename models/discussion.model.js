const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const discussionSchema = new Schema({
	question: {
		type: Schema.Types.ObjectID,
		required: true,
		ref: 'Question'
	},
	topic:{
		type: String
	}

},
{
  timestamps: true,
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
