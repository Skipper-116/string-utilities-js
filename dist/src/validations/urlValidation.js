"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ipV6Validation = exports.ipV4Validation = exports.urlValidation = void 0;
/**
 * Validates a URL using a regular expression.
 *
 * @param {string} url - The URL to validate.
 * @returns {boolean} True if the URL is valid according to the regex, false otherwise.
 *
 * @description
 * This function uses a regular expression to perform basic validation of a URL.
 * It checks for the following components:
 * 1. Protocol (optional): http:// or https://
 * 2. Domain name: Can include letters, numbers, dots, and hyphens
 * 3. Top-level domain: 2 to 6 letters, with an optional secondary level
 * 4. Path (optional): Can include letters, numbers, dots, and hyphens
 */
const urlValidation = (url) => {
    const re = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/;
    return re.test(url);
};
exports.urlValidation = urlValidation;
/**
 * Validates an IPv4 address using a regular expression.
 *
 * @param {string} ip - The IP address to validate.
 * @returns {boolean} True if the IP address matches the IPv4 format, false otherwise.
 *
 * @description
 * This function uses a regular expression to check if a given string matches
 * the basic format of an IPv4 address: four groups of 1 to 3 digits, separated by dots.
 */
const ipV4Validation = (ip) => {
    const re = /^(\d{1,3}\.){3}\d{1,3}$/;
    return re.test(ip);
};
exports.ipV4Validation = ipV4Validation;
/**
 * Validates an IPv6 address using a regular expression.
 *
 * @param {string} ip - The IP address to validate.
 * @returns {boolean} True if the IP address matches the basic IPv6 format, false otherwise.
 *
 * @description
 * This function uses a regular expression to check if a given string matches
 * the basic format of a full IPv6 address: eight groups of 1 to 4 hexadecimal digits,
 * separated by colons.
 */
const ipV6Validation = (ip) => {
    const re = /^([0-9a-f]{1,4}:){7}([0-9a-f]{1,4})$/;
    return re.test(ip);
};
exports.ipV6Validation = ipV6Validation;
