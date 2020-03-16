const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    instructor: {
      type: Schema.Types.ObjectID,
      required: true,
      ref: "Instructor"
    },
    question: [
      {
        type: Schema.Types.ObjectID,
        required: false,
        ref: "Question"
      }
    ],
    students: [
      {
        type: Schema.Types.ObjectID,
        required: false,
        ref: "Student"
      }
    ],
    code: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      maxlength: 50,
      required: true
    },
    classStart: {
      type: Date,
      default: Date.now
    },
    dayOfWeek: [
      {
        type: String,
        required: true
      }
    ],
    classDuration: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    sectionNumber: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
