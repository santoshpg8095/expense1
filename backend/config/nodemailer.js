const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({ // Fixed: createTransport instead of createTransporter
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
module.exports = transporter;