import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    emailUserExists: !!process.env.EMAIL_USER,
    emailUserFirstChars: process.env.EMAIL_USER ? process.env.EMAIL_USER.substring(0, 5) + '***' : 'not set',
    emailPasswordExists: !!process.env.EMAIL_APP_PASSWORD,
    emailPasswordLength: process.env.EMAIL_APP_PASSWORD ? process.env.EMAIL_APP_PASSWORD.length : 0,
    firebaseApiKeyExists: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    firebaseApiKeyFirstChars: process.env.NEXT_PUBLIC_FIREBASE_API_KEY 
      ? process.env.NEXT_PUBLIC_FIREBASE_API_KEY.substring(0, 5) + '***' : 'not set',
  });
} 