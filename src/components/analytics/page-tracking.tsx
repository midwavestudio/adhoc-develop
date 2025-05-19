'use client';

import { usePageTracking } from '@/lib/hooks/usePageTracking';

/**
 * Component that silently tracks page views
 * Add this to the main layout to enable automatic page tracking
 */
export function PageTracking() {
  // This hook handles the page view tracking logic
  usePageTracking();
  
  // Return null as this is a utility component with no UI
  return null;
} 