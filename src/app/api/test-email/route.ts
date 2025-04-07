import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function GET() {
  try {
    // Get environment variables directly
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_APP_PASSWORD = process.env.EMAIL_APP_PASSWORD;
    
    // Log the environment variables (partially masked for security)
    console.log('Email user:', EMAIL_USER ? EMAIL_USER.substring(0, 3) + '***' + EMAIL_USER.substring(EMAIL_USER.indexOf('@')) : 'not set');
    console.log('Email password exists:', !!EMAIL_APP_PASSWORD);
    console.log('Email password length:', EMAIL_APP_PASSWORD?.length || 0);

    // Check if environment variables are set
    if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: 'Missing email environment variables' },
        { status: 500 }
      );
    }

    // Create a test transporter with explicit SMTP configuration
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_APP_PASSWORD,
      },
      debug: true, // Enable debug output
      logger: true // Log information about the transport mechanism
    });

    // Verify the connection configuration
    const verifyResult = await transporter.verify();
    console.log('Transporter verification:', verifyResult);

    // Send a test email
    const info = await transporter.sendMail({
      from: `"Test Email" <${EMAIL_USER}>`,
      to: 'adhocgib@gmail.com',
      subject: 'Test Email from Next.js App',
      text: 'This is a test email to verify that nodemailer is working correctly.',
      html: '<div>This is a test email to verify that nodemailer is working correctly.</div>'
    });

    console.log('Email sent:', info.messageId);
    
    return NextResponse.json({
      success: true,
      messageId: info.messageId,
      verifyResult,
    });
  } catch (error) {
    console.error('Error sending test email:', error);
    
    // Return detailed error information
    return NextResponse.json(
      { 
        error: 'Failed to send test email',
        message: error instanceof Error ? error.message : String(error),
        stack: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
} 