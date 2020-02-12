const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

//Load Input Validation
const validateRegisterInput = require("../validation/user-validation");

// @route   POST api/user/
// @desc    Register user
// @access  Public
router.route("/").post((req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const userName = req.body.userName;
  const password = req.body.password;

  const newUser = new User({
    email,
    userName,
    password,
    lastName,
    firstName
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   GET api/user/
// @desc    Retrieve all users
// @access  Public
router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   POST api/user/login
// @desc    Register user
// @access  Public
router.route("/login").post((req, res, next) => {
  User.authenticate(req.body.logemail, req.body.logpassword, function(
    error,
    user
  ) {
    if (error || !user) {
      var err = new Error("Wrong email or password.");
      err.status = 401;
      return next(err);
    } else {
      req.session.userID = user._id;
      res.status(200).json("Login successful");
    }
  });
});

// @route   GET API/User/:id
// @desc    find user
// @access  Public
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   DELETE API/User/Delete
// @desc    find user
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    await User.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "User deleted!" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route   POST API/User/Update
// @desc    find user
// @access  Public
router.post("/update/:id", (req, res) => {
  User.findById(res.params.id)
    .then(user => {
      user.email = req.body.email;

      user
        .save()
        .then(() => res.json("User updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
