const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const config = require('config');
const { sendWelcomeEmail } = require('../emails/account');

const User = require("../models/user.model");

// @route   GET API/Users/
// @desc    Get list of users
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

// @route   POST API/Users/Register
// @desc    Register user
// @access  Public
router.route("/register").post(async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const userName = req.body.userName;
  const password = req.body.password;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res
        .status(400)
        .json({ errors: [{ message: "User already exists!" }] });
    }

    const newUser = new User({
      email,
      username,
      u_password,
      lastName,
      firstName
    });

    await newUser.save();
    sendWelcomeEmail(newUser.email, newUser.firstName);

    //----- JWT -----
    const payload = {
      user: {
        id: newUser._id
    }}

    jwt.sign(
      payload,
      config.get('JWT_SECRET'),
      {expiresIn: 360000}, // optional but recommended
      (err, token) => {
        if(err) throw err;
        res.json({token});
      }
    )
  } catch(err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   GET API/Users/:id
// @desc    find user
// @access  Public
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

// @route   DELETE API/Users/Delete
// @desc    find user
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.params.id });
    res.json({ message: "User deleted!" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route   POST API/Users/Update
// @desc    find user
// @access  Public
router.post("/update/:id", (req, res) => {
  User.findById(res.params.id)
    .then(user => {
      user.email = req.body.email;

      user
        .save()
        .then(() => res.json({ message: "User updated!" }))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
