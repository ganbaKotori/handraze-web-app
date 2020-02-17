const sgMail = require('@sendgrid/mail');
require('dotenv').config(); // gets environmental variables in .env

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'tester@handraze.com',
    subject: 'Welcome to Handraze',
    text: `Welcome to the app, ${name}.`
  })
}

module.exports = {
  sendWelcomeEmail
}
