export const uniqueElements = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

export const flattenArray = <T>(arrays: T[][]): T[] => {
  return arrays.reduce((acc, val) => acc.concat(val), []);
};