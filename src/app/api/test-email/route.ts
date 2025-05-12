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
    console.log('Password contains spaces:', EMAIL_APP_PASSWORD?.includes(' ') || false);

    // Check if environment variables are set
    if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
      return NextResponse.json(
        { error: 'Missing email environment variables' },
        { status: 500 }
      );
    }

    // Try several transport configurations
    const results = [];
    let finalTransporter = null;
    let success = false;
    
    // 1. Try with password as-is
    try {
      console.log('Attempt 1: Original password configuration');
      const transporter1 = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: EMAIL_USER,
          pass: EMAIL_APP_PASSWORD,
        },
      });
      
      await transporter1.verify();
      results.push({ method: 'Original password', success: true });
      finalTransporter = transporter1;
      success = true;
    } catch (error1) {
      results.push({ 
        method: 'Original password', 
        success: false, 
        error: error1 instanceof Error ? error1.message : String(error1) 
      });
      console.error('Attempt 1 failed:', error1);
    }
    
    // 2. Try with password spaces removed
    if (!success && EMAIL_APP_PASSWORD.includes(' ')) {
      try {
        const cleanPassword = EMAIL_APP_PASSWORD.replace(/\s+/g, '');
        console.log('Attempt 2: Spaces removed from password');
        console.log('Cleaned password length:', cleanPassword.length);
        
        const transporter2 = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          auth: {
            user: EMAIL_USER,
            pass: cleanPassword,
          },
        });
        
        await transporter2.verify();
        results.push({ method: 'Password with spaces removed', success: true });
        finalTransporter = transporter2;
        success = true;
      } catch (error2) {
        results.push({ 
          method: 'Password with spaces removed', 
          success: false, 
          error: error2 instanceof Error ? error2.message : String(error2) 
        });
        console.error('Attempt 2 failed:', error2);
      }
    }
    
    // 3. Try with TLS (port 587)
    if (!success) {
      try {
        console.log('Attempt 3: Using TLS on port 587');
        const transporter3 = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_APP_PASSWORD,
          },
          requireTLS: true,
        });
        
        await transporter3.verify();
        results.push({ method: 'TLS on port 587', success: true });
        finalTransporter = transporter3;
        success = true;
      } catch (error3) {
        results.push({ 
          method: 'TLS on port 587', 
          success: false, 
          error: error3 instanceof Error ? error3.message : String(error3) 
        });
        console.error('Attempt 3 failed:', error3);
      }
    }
    
    // If all configuration attempts failed
    if (!success || !finalTransporter) {
      console.error('All SMTP configurations failed');
      return NextResponse.json({
        success: false,
        message: 'All SMTP configurations failed',
        results
      }, { status: 500 });
    }
    
    // Try to send a test email with the successful configuration
    try {
      console.log('Sending test email using successful configuration');
      const info = await finalTransporter.sendMail({
        from: `"Test Email" <${EMAIL_USER}>`,
        to: EMAIL_USER, // Send to the same account for testing
        subject: 'Test Email from Next.js App ' + new Date().toISOString(),
        text: 'This is a test email to verify that nodemailer is working correctly. Sent at: ' + new Date().toLocaleString(),
        html: `<div>
          <h2>Test Email</h2>
          <p>This is a test email to verify that nodemailer is working correctly.</p>
          <p>Sent at: ${new Date().toLocaleString()}</p>
          <p>Configuration used: ${results.find(r => r.success)?.method}</p>
        </div>`
      });

      console.log('Email sent:', info.messageId);
      
      return NextResponse.json({
        success: true,
        messageId: info.messageId,
        configurationResults: results,
        successfulMethod: results.find(r => r.success)?.method,
      });
    } catch (sendError) {
      console.error('Error sending test email after successful connection:', sendError);
      return NextResponse.json({
        success: false,
        message: 'Connected to SMTP server but failed to send email',
        connectionResults: results,
        sendError: sendError instanceof Error ? sendError.message : String(sendError),
      }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in test email route:', error);
    
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