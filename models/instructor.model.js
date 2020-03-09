const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const instructorSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectID,
      required: true,
      ref: "User"
    },
    course: [
      {
        type: Schema.Types.ObjectID,
        required: false,
        ref: "Course"
      }
    ],
    department: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Instructor = mongoose.model("Instructor", instructorSchema);

module.exports = Instructor;
