const phoneNumberValidation = (phoneNumber: string): boolean => {
    const re = /^\+?[1-9]\d{1,14}$/;
    return re.test(phoneNumber);
};

const malawiPhoneNumberValidation = (phoneNumber: string): boolean => {
    // Regular expression to handle Malawi phone numbers with specific provider prefixes
    const re = /^(\+265|0)(9|8|2|1)\d{7}$/;
    return re.test(phoneNumber);
}

// customizable phone number validation so that the user can specify the country code
const customPhoneNumberValidation = (phoneNumber: string, countryCode: string): boolean => {
    // Regular expression to handle various phone number formats
    const re = new RegExp(`^(${countryCode}|\\+${countryCode}|0)?[\\s-]?\\(?\\d{1,4}\\)?[\\s-]?\\d{1,4}[\\s-]?\\d{1,4}[\\s-]?\\d{1,4}$`);
    return re.test(phoneNumber);
}