/* Analytics utilities */

import { Analytics } from 'some-analytics-library';

/**
 * Track a user event.
 * @param eventName - The name of the event.
 * @param data - Additional data to log.
 */
export function trackEvent(eventName: string, data: object): void {
  Analytics.track(eventName, data);
}

/**
 * Initialize analytics for the application.
 */
export function initializeAnalytics(): void {
  Analytics.init({
    apiKey: process.env.ANALYTICS_API_KEY,
    logLevel: 'info'
  });
}
