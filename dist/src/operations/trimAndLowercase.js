"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimAndLowercase = void 0;
/**
 * Trims whitespace from both ends of a string and converts it to lowercase.
 *
 * @param {string} str - The input string to be trimmed and converted to lowercase.
 * @returns {string} A new string with whitespace removed from both ends and all characters converted to lowercase.
 *
 * @description
 * This function performs two operations on the input string:
 * 1. Removes leading and trailing whitespace using the `trim()` method.
 * 2. Converts all characters to lowercase using the `toLowerCase()` method.
 */
const trimAndLowercase = (str) => {
    return str.trim().toLowerCase();
};
exports.trimAndLowercase = trimAndLowercase;
