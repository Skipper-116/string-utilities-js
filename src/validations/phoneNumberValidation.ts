/**
 * Validates a phone number using a simple regular expression.
 *
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} True if the phone number is valid according to the regex, false otherwise.
 *
 * @description
 * This function uses a regular expression to perform a basic validation of a phone number.
 * It checks for the following format:
 * 1. An optional '+' at the beginning
 * 2. Followed by a digit from 1-9
 * 3. Followed by 1 to 14 digits
 *
 * This format is based on the ITU-T E.164 standard, which specifies that
 * international phone numbers should have a maximum of 15 digits.
 */
const phoneNumberValidation = (phoneNumber: string): boolean => {
  const re = /^\+?[1-9]\d{1,14}$/;
  return re.test(phoneNumber);
};

/**
 * Validates a Malawian phone number using a regular expression.
 *
 * @param {string} phoneNumber - The phone number to validate.
 * @returns {boolean} True if the phone number is a valid Malawian number, false otherwise.
 *
 * @description
 * This function uses a regular expression to validate Malawian phone numbers.
 * It checks for the following format:
 * 1. The number starts with either "+265" (international format) or "0" (local format)
 * 2. Followed by a single digit representing the provider prefix:
 *    - 9 or 8 (for mobile networks)
 *    - 2 or 1 (for landlines)
 * 3. Followed by 8 more digits
 */
const isMalawiPhoneNumber = (phoneNumber: string): boolean => {
  // Regular expression to handle Malawi phone numbers with specific provider prefixes
  const re = /^(\+265|0)(9|8|2|1)\d{8}$/;
  return re.test(phoneNumber);
};


/**
 * Validates a phone number for a specified country using a flexible regular expression.
 *
 * @param {string} phoneNumber - The phone number to validate.
 * @param {string} countryCode - The country code to use in the validation (without the '+' sign).
 * @returns {boolean} True if the phone number is valid according to the regex, false otherwise.
 *
 * @description
 * This function creates a dynamic regular expression based on the provided country code
 * to validate phone numbers. It allows for various formats including:
 * - With or without the country code (both with and without '+')
 * - With or without a leading '0'
 * - Spaces, hyphens, or parentheses as separators
 * - 1 to 4 groups of digits, each group containing 1 to 4 digits
 */
// customizable phone number validation so that the user can specify the country code
const customPhoneNumberValidation = (
  phoneNumber: string,
  countryCode: string,
): boolean => {
  // Regular expression to handle various phone number formats
  const re = new RegExp(
    `^(${countryCode}|\\+${countryCode}|0)?[\\s-]?\\(?\\d{1,4}\\)?[\\s-]?\\d{1,4}[\\s-]?\\d{1,4}[\\s-]?\\d{1,4}$`,
  );
  return re.test(phoneNumber);
};

export {
  phoneNumberValidation,
  isMalawiPhoneNumber,
  customPhoneNumberValidation,
};
