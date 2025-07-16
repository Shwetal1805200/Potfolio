import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  console.log('📩 Incoming request data:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Subject:', subject);
  console.log('Message:', message);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  // Verify the SMTP connection
  transporter.verify(function(error, success) {
    if (error) {
      console.error('❌ SMTP verification failed:', error);
    } else {
      console.log('✅ SMTP server is ready to take our messages');
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `Portfolio Contact: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`
  };

  console.log('📤 Sending email...');
  try {
    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully!');
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('❌ Error sending email:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
