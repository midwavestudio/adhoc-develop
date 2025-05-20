import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  return NextResponse.json({
    message: 'Firebase test API temporarily disabled',
    status: 'disabled',
    timestamp: new Date().toISOString()
  });
} 