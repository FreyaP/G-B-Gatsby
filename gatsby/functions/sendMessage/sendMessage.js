const nodemailer = require('nodemailer');

// create transporter
const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: 587,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

exports.handler = async (event, context) => {
  // test send and email
  const info = await transporter.sendMail({
    from: 'G&B Contracting <GandB@example.com>',
    to: 'messager@example.com',
    subject: 'New Message!',
    html: `<p>Your message has been received!</p>`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(info),
  };
};
