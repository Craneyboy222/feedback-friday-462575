import { expect } from '@playwright/test';

expect.extend({
  toBeVisibleInViewport: async (elementHandle, options) => {
    const isVisible = await elementHandle.isVisible();
    if (!isVisible) return { pass: false, message: () => 'Element is not visible' };
    const boundingBox = await elementHandle.boundingBox();
    const viewport = await elementHandle.page().viewportSize();
    if (!boundingBox || !viewport) return { pass: false, message: () => 'Could not get bounding box or viewport size' };
    const inViewport = boundingBox.y >= 0 && boundingBox.y + boundingBox.height <= viewport.height;
    return { pass: inViewport, message: () => 'Element is not within the viewport' };
  }
});