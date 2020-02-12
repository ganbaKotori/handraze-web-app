const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if(!token){
    return res.status(401).json({message: 'No token, authorization denied'});
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, config.get('JWT_SECRET'));

    req.user = decoded.user;
    next();
  } catch(err) {
    res.status(401).json({message: 'Token is not valid'});
  }
};
