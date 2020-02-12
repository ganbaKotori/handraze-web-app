const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const User = require('../models/user.model');

// @route   GET API/auth/
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
  try {
    // Return all of the users data, except password
    const user = await User.findById(req.user.id).select('-u_password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
