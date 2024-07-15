const nodemailer = require('nodemailer');

async function sendMails() {
  // create transporter object using SMTP transport
  const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'amank2070@gmail.com',
          pass: 'pczcjeyfqguipyoe'
      }
  });

  // define mail options
  const mailOptions = {
      from: 'amank2070@gmail.com',
      to: 'amankumaroo784@gmail.com',
      subject: 'Testing nodemailer',
      text: `Hello Aman, I'm testing this nodemailer on my system.`
  };

  // send mail with defined mail options
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log('error while sending mail', error);
    else console.log('Email sent: ' + info.response);
  });
}

sendMails();