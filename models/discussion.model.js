const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const discussionSchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: false
    },
    user: {
      type: Schema.Types.ObjectID,
      required: true,
      ref: "User"
    },
    name: {
      type: String,
      required: false
    },

    answer: [
      {
        user: {
          type: Schema.Types.ObjectID,
          required: true,
          ref: "User"
        },
        text: { type: String, required: false },
        name: {
          type: String,
          required: true
        },
        dateSubmitted: {
          type: Date,
          default: Date.now
        }
      }
    ],

    dateSubmitted: {
      type: Date,
      default: Date.now
    }
  },

  {
    timestamps: true
  }
);

const Discussion = mongoose.model("discussion", discussionSchema);

module.exports = Discussion;
