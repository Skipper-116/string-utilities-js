"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndReplace = void 0;
/**
 * Finds all occurrences of a substring in a string and replaces them with another string.
 *
 * @param {string} str - The original string to perform find and replace on.
 * @param {string} find - The substring to find in the original string.
 * @param {string} replace - The string to replace all occurrences of the 'find' substring.
 * @returns {string} A new string with all occurrences of 'find' replaced by 'replace'.
 */
const findAndReplace = (str, find, replace) => {
    return str.replace(new RegExp(find, 'g'), replace);
};
exports.findAndReplace = findAndReplace;
