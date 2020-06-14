const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Sends a templated email setup on SendGrid
const sendWelcomeEmail = (email, userName, firstName, lastName, password) => {
  sgMail.send({
    to: email,
    from: 'handraze@sendgrid.com',
    subject: 'Welcome to Handraze!',
    templateId: '79221341-e89f-44a6-aed3-b384f451ad4f',
    dynamic_template_data: {
      email: email,
      userName: userName,
      firstName: firstName,
      lastName: lastName,
      password: password
    }
  });
};

module.exports = {
  sendWelcomeEmail
};
