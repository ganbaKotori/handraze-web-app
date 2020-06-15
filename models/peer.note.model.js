const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const peerNoteSchema = new Schema({
  course: {
    type: Schema.Types.ObjectID,
    required: false,
    ref: "Course",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
    required: true,
    maxlength: 500,
  },
  user: {
    type: Schema.Types.ObjectID,
    required: true,
    ref: "User",
  },
});

const PeerNote = mongoose.model("PeerNote", peerNoteSchema);

module.exports = PeerNote;
