"use strict";
/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const functions = __importStar(require("firebase-functions"));
const nodemailer = __importStar(require("nodemailer"));
const googleapis_1 = require("googleapis");
// This function will create a nodemailer transporter using OAuth2
const createTransporter = async (credentials) => {
    const OAuth2 = googleapis_1.google.auth.OAuth2;
    const oauth2Client = new OAuth2(credentials.client_id, credentials.client_secret, 'https://developers.google.com/oauthplayground');
    oauth2Client.setCredentials({
        refresh_token: credentials.refresh_token
    });
    try {
        const accessToken = await new Promise((resolve, reject) => {
            oauth2Client.getAccessToken((err, token) => {
                if (err) {
                    reject(`Failed to get access token: ${err.message}`);
                }
                if (token === null || token === undefined) {
                    reject('Access token is null or undefined');
                }
                else {
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
    }
    catch (error) {
        console.error('Error creating transporter:', error);
        throw error;
    }
};
// Helper function to validate email format
const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};
// Cloud Function to send emails from contact form
exports.sendEmail = functions.https.onCall(async (data, context) => {
    try {
        // Cast data to our expected format
        const formData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message
        };
        // Validate request data
        if (!formData.name || !formData.email || !formData.message) {
            throw new functions.https.HttpsError('invalid-argument', 'Missing required fields: name, email, or message');
        }
        // Validate email format
        if (!isValidEmail(formData.email)) {
            throw new functions.https.HttpsError('invalid-argument', 'Invalid email format');
        }
        // Get Gmail credentials from Firebase Functions config
        const credentials = {
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
            to: 'adhocjon@gmail.com',
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
    }
    catch (error) {
        console.error('Error sending email:', error);
        throw new functions.https.HttpsError('internal', 'Error sending email. Please try again later.', error);
    }
});
//# sourceMappingURL=index.js.map