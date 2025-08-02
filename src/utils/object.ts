/* Object utilities */

import deepmerge from 'deepmerge';

/**
 * Deep merge two objects ensuring no mutation of inputs.
 * @param target - The target object to merge into.
 * @param source - The source object to merge from.
 * @returns A new object with merged values.
 */
export function mergeObjects<T, U>(target: T, source: U): T & U {
  return deepmerge(target, source);
}

/**
 * Check if an object is empty.
 * @param obj - The object to check.
 * @returns True if the object is empty, false otherwise.
 */
export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0;
}
