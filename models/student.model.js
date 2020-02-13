const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectID,
      required: true,
      ref: "User"
    },
    year: {
      type: String,
      required: true
    },
    institution: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
<<<<<<< HEAD

=======
>>>>>>> e97896099d4f35cd989ac62e9f3cf476df43e55a
