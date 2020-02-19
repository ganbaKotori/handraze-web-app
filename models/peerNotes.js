const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const peerSchema = new Schema({
	classTitle: {
		type: Schema.Types.ObjectID,
		required: true,
		ref: 'Course'
	},
	noteDate:{
		type: date,
		default: Date.now
	},
	notes:{
		type: string,
		required : true,
		maxlength : 500
}, {
  timestamps: true,
});

const Peer = mongoose.model('Peer', peerSchema);

module.exports = Peer;

