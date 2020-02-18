const sgMail = require('@sendgrid/mail');
const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

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
