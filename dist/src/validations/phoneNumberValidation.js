"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customPhoneNumberValidation = exports.malawiPhoneNumberValidation = exports.phoneNumberValidation = void 0;
const phoneNumberValidation = (phoneNumber) => {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phoneNumber);
};
exports.phoneNumberValidation = phoneNumberValidation;
const malawiPhoneNumberValidation = (phoneNumber) => {
    // Regular expression to handle Malawi phone numbers with specific provider prefixes
    const re = /^(\+265|0)(9|8|2|1)\d{8}$/;
    return re.test(phoneNumber);
};
exports.malawiPhoneNumberValidation = malawiPhoneNumberValidation;
// customizable phone number validation so that the user can specify the country code
const customPhoneNumberValidation = (phoneNumber, countryCode) => {
    // Regular expression to handle various phone number formats
    const re = new RegExp(`^(${countryCode}|\\+${countryCode}|0)?[\\s-]?\\(?\\d{1,4}\\)?[\\s-]?\\d{1,4}[\\s-]?\\d{1,4}[\\s-]?\\d{1,4}$`);
    return re.test(phoneNumber);
};
exports.customPhoneNumberValidation = customPhoneNumberValidation;
