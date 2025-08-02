/* Address utilities */

interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

/**
 * Validate an address object.
 * @param address - The address to validate.
 * @returns True if valid, false otherwise.
 */
export function isValidAddress(address: Address): boolean {
  return !!(address.street && address.city && address.state && address.postalCode && address.country);
}

/**
 * Format an address to a single-line string.
 * @param address - The address object.
 * @returns The formatted address string.
 */
export function formatAddress(address: Address): string {
  return `${address.street}, ${address.city}, ${address.state}, ${address.postalCode}, ${address.country}`;
}
