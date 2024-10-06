/**
 * Converts a string to title case.
 *
 * @param {string} str - The input string to convert to title case.
 * @returns {string} The input string converted to title case.
 *
 * @description
 * This function converts a given string to title case, where the first
 * character of each word is capitalized and the rest are lowercase.
 * Words are assumed to be separated by spaces.
 */
export const titleCase = (str: string): string => {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
