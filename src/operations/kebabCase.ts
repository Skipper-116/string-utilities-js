/**
 * Converts a string to kebab-case.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The kebab-cased version of the input string.
 *
 * @description
 * This function converts a given string to kebab-case by replacing all
 * spaces with hyphens and converting the entire string to lowercase.
 *
 */
const kebabCase = (str: string): string => {
  return str.replace(/\s+/g, '-').toLowerCase();
};

/**
 * Converts a string to pascal-case.
 * @param {string} str - The input string to convert.
 * @returns {string} The pascal-cased version of the input string.
 * 
 * @description
 * This function converts a given string to pascal-case by replacing all
 * spaces with an empty string and converting the first character of each
 * word to uppercase.
 */
const pascalCase = (str: string): string => {
  return str
    .replace(/(\w)(\w*)/g, (g0, g1, g2) => g1.toUpperCase() + g2.toLowerCase())
    .replace(/\s/g, '');
}

/**
 * Converts a string to camel-case.
 * @param {string} str - The input string to convert.
 * @returns {string} The camel-cased version of the input string.
 * @description
 * This function converts a given string to camel-case by replacing all
 * spaces with an empty string and converting the first character of each
 * word to uppercase.
 * 
 */
const camelCase = (str: string): string => {
  return str
    .split(' ')
    .map((word, index) => 
      index === 0 
        ? word.toLowerCase() 
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join('');
}

/**
 * Converts a string to snake-case.
 * @param {string} str - The input string to convert.
 * @returns {string} The snake-cased version of the input string.
 * @description
 * This function converts a given string to snake-case by replacing all
 * spaces with an underscore and converting the entire string to lowercase.
 */
const snakeCase = (str: string): string => {
  return str.replace(/\s+/g, '_').toLowerCase();
}

export { kebabCase, pascalCase, camelCase, snakeCase };

