import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Define protected routes that require authentication
  const isAdminPath = path.startsWith('/admin') && path !== '/admin/login';
  
  // Bypass authentication in development mode
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && path.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Check if user is authenticated
  const isAuthenticated = request.cookies.has('admin_session');

  // Redirect to login if trying to access protected route while not authenticated
  if (isAdminPath && !isAuthenticated) {
    // Redirect to admin login page
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/admin/:path*'],
}; 