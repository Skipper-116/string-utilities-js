"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphanumericCheck = void 0;
/**
 * Checks if a string contains only alphanumeric characters.
 *
 * @param {string} str - The input string to check.
 * @returns {boolean} True if the string contains only alphanumeric characters, false otherwise.
 *
 * @description
 * This function uses a regular expression to test if the input string
 * contains only alphanumeric characters (a-z, A-Z, 0-9). It returns true
 * if the entire string matches this criteria, and false otherwise.
 */
const alphanumericCheck = (str) => {
    const re = /^[a-z0-9]+$/i;
    return re.test(str);
};
exports.alphanumericCheck = alphanumericCheck;
