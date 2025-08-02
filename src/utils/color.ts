/* Color utilities */

/**
 * Convert a hex color to RGB.
 * @param hex - The hex color string.
 * @returns An object with r, g, b values.
 */
export function hexToRgb(hex: string): { r: number, g: number, b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

/**
 * Convert RGB to hex color.
 * @param r - Red value.
 * @param g - Green value.
 * @param b - Blue value.
 * @returns Hex color string.
 */
export function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}
