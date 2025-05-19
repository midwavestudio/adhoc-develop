/**
 * Type declaration for Google Analytics gtag
 */

interface Window {
  gtag: (
    command: 'event' | 'config' | 'set' | 'js' | 'consent',
    targetId: string,
    params?: {
      [key: string]: any;
    }
  ) => void;
} 