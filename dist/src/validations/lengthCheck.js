"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthCheck = void 0;
/**
 * Checks if a string's length is within a specified range (inclusive).
 *
 * @param {string} str - The string to check.
 * @param {number} min - The minimum allowed length (inclusive).
 * @param {number} max - The maximum allowed length (inclusive).
 * @returns {boolean} True if the string length is within the specified range, false otherwise.
 *
 * @description
 * This function checks if the length of the input string is greater than or equal to
 * the specified minimum length and less than or equal to the specified maximum length.
 */
const lengthCheck = (str, min, max) => {
    return str.length >= min && str.length <= max;
};
exports.lengthCheck = lengthCheck;
