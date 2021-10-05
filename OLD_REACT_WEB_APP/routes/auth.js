const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
const Validator = require("validator");
const User = require("../models/user.model");
const validateLoginInput = require("../validation/login-validation");

// @route   GET API/auth/
// @desc    get currently signed in user info
// @access  Public
router.get("/", auth, async (req, res) => {
  try {
    // Return all of the users data, except password
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST API/auth/
// @desc    login user
// @access  Public
router.post("/", async (req, res, next) => {
  const { errors, isValid } = validateLoginInput(req.body);
  //if user input is invalid, return with error message
  if (!isValid) {
    return res.status(400).json(errors);
  }
  try {
    var user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
      .status(400).send("No user found!")
    }
      const isMatch = await bcrypt.compareSync(req.body.password, user.password);

      if (!isMatch) {
        return res
          .status(400).send("Invalid Credentials")
      }
      const payload = {
          user: {
            id: user._id
        }
      } 
      jwt.sign(
          payload,
          process.env.JWT_SECRET,
          { expiresIn: 360000 }, // optional but recommended
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );   
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});
module.exports = router;


