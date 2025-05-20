import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  // Get environment variables
  const EMAIL_USER = process.env.EMAIL_USER;
  const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
  
  console.log('Creating transporter with user:', EMAIL_USER?.substring(0, 5) + '***');
  console.log('Password length (should be 16):', EMAIL_APP_PASSWORD?.length || 0);
  
  if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
    throw new Error('Email configuration is incomplete. Missing EMAIL_USER or EMAIL_APP_PASSWORD environment variables.');
  }
  
  if (EMAIL_APP_PASSWORD.length !== 16) {
    console.warn('Gmail App Password should be exactly 16 characters. The current password length is ' + EMAIL_APP_PASSWORD.length);
  }
  
  if (EMAIL_APP_PASSWORD.includes(' ')) {
    console.error('Gmail App Password contains spaces. Please remove all spaces.');
    // Automatically remove spaces in case they were accidentally included
    const cleanPassword = EMAIL_APP_PASSWORD.replace(/\s+/g, '');
    console.log('Cleaned password length:', cleanPassword.length);
    
    // Use the cleaned password
    return nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: EMAIL_USER,
        pass: cleanPassword,
      },
      debug: true, // Enable debugging to trace auth issues
    });
  }
  
  // Use explicit SMTP configuration instead of 'gmail' service
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_APP_PASSWORD,
    },
    debug: true, // Enable debugging to trace auth issues
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

    // Verify password format
    if (EMAIL_APP_PASSWORD.length !== 16 || EMAIL_APP_PASSWORD.includes(' ')) {
      console.warn('App password format warning - Length:', EMAIL_APP_PASSWORD.length, 'Contains spaces:', EMAIL_APP_PASSWORD.includes(' '));
    }

    // Create transporter
    const transporter = createTransporter();
    
    // Verify the connection configuration
    try {
      const verifyResult = await transporter.verify();
      console.log('SMTP connection verified:', verifyResult);
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      // Continue anyway, as some providers block verify but allow sending
    }

    // Destination email address for contact form submissions
    const CONTACT_EMAIL = 'contact@example.com';

    // Set up email data
    const mailOptions = {
      from: `"Adhoc Develop Contact" <${EMAIL_USER}>`,
      to: CONTACT_EMAIL, // Send to the specified contact email
      replyTo: email,
      subject: `Website Inquiry from ${name}`,
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
    
    // Process common Gmail SMTP errors
    let errorMessage = 'Failed to send email';
    if (error instanceof Error) {
      errorMessage += ': ' + error.message;
      
      // Add specific advice for common Gmail authentication errors
      if (error.message.includes('535-5.7.8') || error.message.includes('Username and Password not accepted')) {
        errorMessage += '. This is likely a Gmail authentication issue. Please ensure 2-Step Verification is enabled on your Google account and you\'re using a valid App Password.';
      } else if (error.message.includes('SMTP connection failed')) {
        errorMessage += '. SMTP connection to Gmail failed. Please check if your internet connection is stable.';
      }
    } else {
      errorMessage += ': ' + String(error);
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 