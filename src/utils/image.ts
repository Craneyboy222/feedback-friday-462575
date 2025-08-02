/* Image utilities */

/**
 * Load an image from a URL.
 * @param url - The image URL.
 * @returns A promise that resolves to an HTMLImageElement.
 */
export function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Failed to load image at ' + url));
    img.src = url;
  });
}

/**
 * Resize an image to the specified width and height.
 * @param img - The image to resize.
 * @param width - The target width.
 * @param height - The target height.
 * @returns A canvas element with the resized image.
 */
export function resizeImage(img: HTMLImageElement, width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.drawImage(img, 0, 0, width, height);
  }
  return canvas;
}
