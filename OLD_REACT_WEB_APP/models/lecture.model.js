const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const lectureSchema = new Schema(
  {
    topic: {
      type: String
    },
    studentsAttending: [
      {
        type: Schema.Types.ObjectID,
        required: false,
        ref: "Student"
      }
    ],
    course: {
        type: String,
        required: true,
    },
    /*inSession: {
      type: Boolean,
      required: true
    },*/
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

const Lecture = mongoose.model("Lecture", lectureSchema);

module.exports = Lecture;
