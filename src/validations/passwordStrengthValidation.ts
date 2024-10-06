/**
 * Validates password strength using a regular expression.
 *
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password meets the strength criteria, false otherwise.
 *
 * @description
 * This function checks if a password meets the following criteria:
 * 1. Contains at least one letter (uppercase or lowercase)
 * 2. Contains at least one digit
 * 3. Is at least 8 characters long
 * 4. Contains only letters and digits
 *
 * The function uses a regular expression with positive lookaheads to enforce these rules.
 */
export const passwordStrengthValidation = (password: string): boolean => {
  const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
};
