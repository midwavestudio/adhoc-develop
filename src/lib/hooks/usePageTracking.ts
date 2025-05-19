'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackPageView } from '../analytics';

/**
 * React hook to track page views when navigating between pages
 */
export const usePageTracking = (): void => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (pathname) {
      // Create URL with search parameters if they exist
      let url = pathname;
      if (searchParams?.toString()) {
        url = `${pathname}?${searchParams.toString()}`;
      }
      
      // Track page view
      trackPageView(url);
    }
  }, [pathname, searchParams]);
}; 