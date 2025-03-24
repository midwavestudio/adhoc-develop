import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email, phone, message, recipient } = data;

    // Validate required fields
    if (!name || !email || !message || !recipient) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // In a real implementation, you would use a service like Nodemailer, SendGrid, Resend, etc.
    // For this example, we'll log the data and simulate a successful response
    
    console.log('Email data:', {
      to: recipient,
      from: email,
      subject: `New contact form submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
    });

    // For a real implementation, uncomment and configure one of these services:
    
    // Example for using Nodemailer (would require installing the nodemailer package)
    /*
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: process.env.EMAIL_SERVER_PORT,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
      secure: true,
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: recipient,
      subject: `New contact form submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
      `,
      html: `
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>
<p><strong>Message:</strong> ${message}</p>
      `,
    });
    */
    
    // Return success response
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 