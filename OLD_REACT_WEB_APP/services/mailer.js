require("dotenv").config(); // gets environmental variables in .env

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

templates = {
  welcome: "d-b7c8c0ccb16f461aa43485bea8398a9c"
}

function sendEmail (data) {
  const msg = {
    to: data.email,
    from: "handraze@sendgrid.com",
    templateId: templates[data.templateName],

    dynamic_template_data: {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      password: data.password
    }
  };

  sgMail.send(msg, (error, result) => {
    if(error){
      console.log(error);
    } else {
      console.log("Successfully sent email!");
    }
  });
}

exports.sendEmail = sendEmail;
