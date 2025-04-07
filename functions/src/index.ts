/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';
import { google } from 'googleapis';

// Define the shape of the contact form data
interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

// Gmail credentials (be sure to add these to your Firebase Functions config)
// You can set these using: firebase functions:config:set gmail.client_id="YOUR_CLIENT_ID" gmail.client_secret="YOUR_CLIENT_SECRET" gmail.refresh_token="YOUR_REFRESH_TOKEN" gmail.user="YOUR_GMAIL"
interface GmailCredentials {
  client_id: string;
  client_secret: string;
  refresh_token: string;
  user: string;
}

// This function will create a nodemailer transporter using OAuth2
const createTransporter = async (credentials: GmailCredentials) => {
  const OAuth2 = google.auth.OAuth2;
  const oauth2Client = new OAuth2(
    credentials.client_id,
    credentials.client_secret,
    'https://developers.google.com/oauthplayground'
  );

  oauth2Client.setCredentials({
    refresh_token: credentials.refresh_token
  });

  try {
    const accessToken = await new Promise<string>((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject(`Failed to get access token: ${err.message}`);
        }
        if (token === null || token === undefined) {
          reject('Access token is null or undefined');
        } else {
          resolve(token);
        }
      });
    });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: credentials.user,
        clientId: credentials.client_id,
        clientSecret: credentials.client_secret,
        refreshToken: credentials.refresh_token,
        accessToken
      }
    });

    return transporter;
  } catch (error) {
    console.error('Error creating transporter:', error);
    throw error;
  }
};

// Helper function to validate email format
const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Cloud Function to send emails from contact form
export const sendEmail = functions.https.onCall(async (data: any, context) => {
  try {
    // Cast data to our expected format
    const formData: ContactFormData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message
    };
    
    // Validate request data
    if (!formData.name || !formData.email || !formData.message) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'Missing required fields: name, email, or message'
      );
    }

    // Validate email format
    if (!isValidEmail(formData.email)) {
      throw new functions.https.HttpsError(
        'invalid-argument',
        'Invalid email format'
      );
    }

    // Get Gmail credentials from Firebase Functions config
    const credentials: GmailCredentials = {
      client_id: functions.config().gmail.client_id,
      client_secret: functions.config().gmail.client_secret,
      refresh_token: functions.config().gmail.refresh_token,
      user: functions.config().gmail.user
    };

    // Create mail transporter
    const transporter = await createTransporter(credentials);

    // Format message details
    const mailOptions = {
      from: `"${formData.name}" <${credentials.user}>`,
      to: 'adhocjon@gmail.com', // Change this to your preferred recipient email
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      text: `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Message: ${formData.message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>Name:</strong> ${formData.name}</p>
  <p><strong>Email:</strong> ${formData.email}</p>
  <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
  <h3 style="margin-top: 20px;">Message:</h3>
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px;">
    ${formData.message.replace(/\n/g, '<br/>')}
  </div>
</div>
      `
    };

    // Send mail
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    // Return success response
    return { success: true, messageId: info.messageId };

  } catch (error) {
    console.error('Error sending email:', error);
    throw new functions.https.HttpsError(
      'internal',
      'Error sending email. Please try again later.',
      error
    );
  }
});
