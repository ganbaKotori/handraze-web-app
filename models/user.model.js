const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true,
      minlength: 2
    },
    firstName: {
      type: String,
      required: true,
      minlength: 2
    },
    avatar: {
      type: String,
      required: false
    }
  },
  {
    timestamps: true
  }
);

//authenticate input against database
userSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email }).exec(function(err, user) {
    if (err) {
      return callback(err);
    } else if (!user) {
      var err = new Error("User not found.");
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, user.password, function(err, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    });
  });
};

userSchema.pre("save", function(next) {
  var user = this;
  var salt = bcrypt.genSaltSync(10);
  bcrypt.hash(user.password, salt, null, function(err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
