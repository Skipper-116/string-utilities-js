"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCustomValidator = void 0;
/**
 * Validates a string against a provided regular expression.
 *
 * @param {RegExp} regex - The regular expression to test against.
 * @param {string} string - The string to validate.
 * @returns {boolean} True if the string matches the regex, false otherwise.
 */
const useCustomValidator = (regex, string) => {
    return regex.test(string);
};
exports.useCustomValidator = useCustomValidator;
