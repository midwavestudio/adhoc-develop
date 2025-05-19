/**
 * Google Analytics utility functions for event tracking
 */

// Define event category types for better type safety
export type EventCategory = 
  | 'engagement'
  | 'conversion'
  | 'navigation'
  | 'form'
  | 'error';

interface TrackEventProps {
  action: string;
  category: EventCategory;
  label?: string;
  value?: number;
  nonInteraction?: boolean;
  // Add any additional properties you want to track
  [key: string]: any;
}

// Get the Google Analytics Measurement ID from environment variables
// This allows changing the ID without having to modify the code
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-X3H2FK3K3G';

/**
 * Track a custom event in Google Analytics
 */
export const trackEvent = ({
  action,
  category,
  label,
  value,
  nonInteraction = false,
  ...rest
}: TrackEventProps): void => {
  // Skip during server-side rendering
  if (typeof window === 'undefined') return;
  
  // Make sure window.gtag is available
  if (!window.gtag) {
    console.warn('Google Analytics not loaded');
    return;
  }

  // Send event to Google Analytics
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
    non_interaction: nonInteraction,
    ...rest,
  });
};

/**
 * Track a page view in Google Analytics
 */
export const trackPageView = (url: string): void => {
  // Skip during server-side rendering
  if (typeof window === 'undefined') return;
  
  // Make sure window.gtag is available
  if (!window.gtag) {
    console.warn('Google Analytics not loaded');
    return;
  }

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
}; 