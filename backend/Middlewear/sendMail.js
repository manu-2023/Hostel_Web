const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables from .env file

// Log the email user and password for debugging
console.log('Email User:', process.env.EMAIL_USER);
console.log('Email Pass:', process.env.EMAIL_PASS);

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Access the email from the environment variable
        pass: process.env.EMAIL_PASS,  // Access the app password from the environment variable
    },
});

// Example function to send email
const sendMail = async (to, subject, text) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Sender's email address
        to: to,                       // Recipient's email address
        subject: subject,             // Email subject
        text: text,                   // Email body in plain text
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = { sendMail };
