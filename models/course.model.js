const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema(
  {
    question: {
      type: Schema.Types.ObjectID,
      required: true,
      ref: "Question"
    },
    code: {
      type: string,
      required: true
    },
    title: {
      type: string,
      required: true
    },
    description: {
      type: string,
      maxlength: 50,
      required: true
    },
    courseDate: {
      type: date,
      default: Date.now
    },
    dayOfWeek: [
      {
        type: String,
        required: true
      }
    ],
    classDuration: {
      type: int,
      required: true
    },
    location: {
      type: string,
      required: true
    },
    sectionNumber: {
      type: int,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
