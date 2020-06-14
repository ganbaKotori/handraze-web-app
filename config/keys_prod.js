  
module.exports = {
    mongoURI: process.env.MONGO_URI,
    secretOrKey: process.env.SECRET_OR_KEY,

    jwtSecret: process.env.JWT_SECRET,
    sendGridAPIKey: process.env.SENDGRID_API_KEY,
    AWSAccessKey: process.env.AWS_ACCESS_KEY,
    AWSSecretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  };