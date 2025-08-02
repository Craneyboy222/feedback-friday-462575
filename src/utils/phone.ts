/* Phone utilities */

/**
 * Validate a phone number format.
 * @param phone - The phone number string.
 * @returns True if valid, false otherwise.
 */
export function isValidPhoneNumber(phone: string): boolean {
  const regex = /^\+?[1-9]\d{1,14}$/;
  return regex.test(phone);
}

/**
 * Format a phone number to E.164 standard.
 * @param phone - The phone number string.
 * @param countryCode - The country code.
 * @returns The formatted phone number.
 */
export function formatPhoneNumber(phone: string, countryCode: string): string {
  // Assuming a library like libphonenumber-js is used here.
  return phone; // Placeholder for actual implementation.
}
