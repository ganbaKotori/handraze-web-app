const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const classroomSchema = new Schema(
  {
    topic: {
      type: String,
      required: true,
      ref: "Topic"
    },
    studentsAttending: [
      {
        type: Schema.Types.ObjectID,
        required: false,
        ref: "Student"
      }
    ],
    cid: {
        type: String,
        required: true,
    },
    inSession: {
      type: Boolean,
      required: true
    },
    sessionStart: {
      type: Date,
      default: Date.now
    },
    sessionEnd: {
      type: Date,
      default: Date.now
    },
    ratings: [
      {
      type: Number,
      required: false
      }
    ]
  },
  {
    timestamps: true
  }
);

const Classroom = mongoose.model("Classroom", classroomSchema);

module.exports = Classroom;
