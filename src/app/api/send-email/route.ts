import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  // Get environment variables
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
  
  console.log('Creating transporter with user:', EMAIL_USER?.substring(0, 5) + '***');
  // Note: We're not logging the password for security reasons
  
  if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
    throw new Error('Email configuration is incomplete. Missing EMAIL_USER or EMAIL_APP_PASSWORD environment variables.');
  }
  
  // Use explicit SMTP configuration instead of 'gmail' service
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_APP_PASSWORD, // This should be an app password, not your regular password
    },
  });
};

export async function POST(request: Request) {
  try {
    console.log('Processing email send request');
    const data = await request.json();
    const { name, email, phone, message } = data;

    console.log('Form data received:', { name, email });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields');
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get environment variables directly
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;

    // Check if environment variables are set
    if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
      console.error('Missing email environment variables');
      return NextResponse.json(
        { error: 'Server email configuration is incomplete' },
        { status: 500 }
      );
    }

    // Create transporter
    const transporter = createTransporter();

    // Set up email data
    const mailOptions = {
      from: `"${name}" <${EMAIL_USER}>`,
      to: 'adhocgib@gmail.com', // Updated recipient email
      replyTo: email,
      subject: `New contact form submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Message: ${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
  <h3 style="margin-top: 20px;">Message:</h3>
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
    ${message.replace(/\n/g, '<br/>')}
  </div>
</div>
      `,
    };

    console.log('Attempting to send email to:', mailOptions.to);

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    // Return success response
    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email: ' + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  }
} 