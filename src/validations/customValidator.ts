/**
 * Validates a string against a provided regular expression.
 *
 * @param {RegExp} regex - The regular expression to test against.
 * @param {string} string - The string to validate.
 * @returns {boolean} True if the string matches the regex, false otherwise.
 */
export const useCustomValidator = (regex: RegExp, string: string): boolean => {
  return regex.test(string);
};
