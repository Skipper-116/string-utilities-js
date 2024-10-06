/**
 * Validates an email address using a simple regular expression.
 *
 * @param {string} email - The email address to validate.
 * @returns {boolean} True if the email address is valid according to the regex, false otherwise.
 *
 * @description
 * This function uses a regular expression to perform a basic validation of an email address.
 * It checks for the presence of:
 * 1. One or more characters that are not whitespace or @ before the @ symbol
 * 2. An @ symbol
 * 3. One or more characters that are not whitespace or @ after the @ symbol
 * 4. A dot (.) followed by one or more characters that are not whitespace or @
 */
export const emailValidation = (email: string): boolean => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
