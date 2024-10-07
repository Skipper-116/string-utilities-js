
/**
 *  Check if a value is blank (null, undefined, empty string, empty array, or empty object)
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is blank, false otherwise.
 * 
 * @description
 * This function checks if a value is blank, which includes the following cases:
 */
const isBlank = (value: any): boolean => {
    // Check for null or undefined
    if (value === null || value === undefined) {
        return true;
    }

    // Check for an empty string or a string with only whitespace
    if (typeof value === 'string' && value.trim() === '') {
        return true;
    }

    // Check for an empty array
    if (Array.isArray(value) && value.length === 0) {
        return true;
    }

    // Check for an empty object
    if (typeof value === 'object' && !Array.isArray(value) && Object.keys(value).length === 0) {
        return true;
    }

    // Otherwise, it's not blank
    return false;
}

/**
 * Check if a value is present (not blank)
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is present, false otherwise.
 * 
 * @description
 * This function checks if a value is present, which means it is not blank.
 */
const isPresent = (value: any): boolean => {
    return !isBlank(value);
}


export { isBlank, isPresent };