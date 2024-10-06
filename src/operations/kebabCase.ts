/**
 * Converts a string to kebab-case.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The kebab-cased version of the input string.
 *
 * @description
 * This function converts a given string to kebab-case by replacing all
 * spaces with hyphens and converting the entire string to lowercase.
 *
 */
export const kebabCase = (str: string): string => {
  return str.replace(/\s+/g, '-').toLowerCase();
};
