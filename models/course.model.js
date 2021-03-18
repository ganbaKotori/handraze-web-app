const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    discussion: [
      {
        type: Schema.Types.ObjectID,
        required: false,
        ref: "discussion",
      },
    ],
    lecture: [
      {
        type: Schema.Types.ObjectID,
        required: false,
        ref: "Lecture",
      },
    ],
    students: [
      {
        type: Schema.Types.ObjectID,
        required: false,
        ref: "Student",
      },
    ],
    instructor: 
      {
        type: Schema.Types.ObjectID,
        required: true,
        ref: "Instructor",
      }
    ,
    code: {
      type: String,
      required: false,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    classEnd: {
      type: String,
      required: true,
    },
    classStart: {
      type: String,
      required: true,
    },

    dayOfWeek: [
      {
        type: String,
        required: true,
      },
    ],
    location: {
      type: String,
      required: true,
    },
    sectionNumber: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
