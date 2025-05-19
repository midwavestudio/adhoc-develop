'use client';

import { Button, ButtonProps } from '@/components/ui/button';
import { trackEvent } from '@/lib/analytics';
import { forwardRef } from 'react';

interface TrackedButtonProps extends ButtonProps {
  /**
   * Analytics action name for the event
   */
  analyticsAction: string;
  
  /**
   * Analytics event category
   */
  analyticsCategory: 'engagement' | 'conversion' | 'navigation' | 'form' | 'error';
  
  /**
   * Optional analytics label
   */
  analyticsLabel?: string;
  
  /**
   * Optional analytics value (must be a number)
   */
  analyticsValue?: number;
  
  /**
   * Any additional analytics properties
   */
  analyticsProps?: Record<string, any>;
}

/**
 * Button component that automatically tracks clicks in Google Analytics
 */
export const TrackedButton = forwardRef<HTMLButtonElement, TrackedButtonProps>(
  ({
    onClick,
    analyticsAction,
    analyticsCategory,
    analyticsLabel,
    analyticsValue,
    analyticsProps = {},
    children,
    ...props
  }, ref) => {
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      // Track the event
      trackEvent({
        action: analyticsAction,
        category: analyticsCategory,
        label: analyticsLabel,
        value: analyticsValue,
        ...analyticsProps
      });
      
      // Call the original onClick handler if provided
      if (onClick) {
        onClick(event);
      }
    };
    
    return (
      <Button 
        ref={ref} 
        onClick={handleClick} 
        {...props}
      >
        {children}
      </Button>
    );
  }
); 