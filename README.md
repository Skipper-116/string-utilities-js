# @skipper116/string-utilities

`@skipper116/string-utilities` is a lightweight collection of string manipulation and validation utilities built for JavaScript and TypeScript projects. This package provides functions to trim, convert, validate, and generate string values efficiently.

## Installation

You can install the package via npm:

```bash
npm install @skipper116/string-utilities
```

## Usage

To use any of the functions in your JavaScript or TypeScript project, import them from the package as shown in the examples below.

### Example 1: Basic String Manipulation

```typescript
import {
  trimAndLowercase,
  titleCase,
  kebabCase,
  reverseString,
} from "@skipper116/string-utilities";

// Trim and convert to lowercase
const lower = trimAndLowercase("  Hello World  ");
console.log(lower); // Output: 'hello world'

// Convert a string to Title Case
const title = titleCase("hello world from string utilities");
console.log(title); // Output: 'Hello World From String Utilities'

// Convert a string to Kebab Case
const kebab = kebabCase("Hello World From String Utilities");
console.log(kebab); // Output: 'hello-world-from-@skipper116/string-utilities'

// Reverse a string
const reversed = reverseString("Hello");
console.log(reversed); // Output: 'olleH'
```

### Example 2: String Validations

```typescript
import {
  emailValidation,
  urlValidation,
  phoneNumberValidation,
  passwordStrengthValidation,
  malawiPhoneNumberValidation,
  customPhoneNumberValidation,
  ipV4Validation,
  ipV6Validation,
} from "@skipper116/string-utilities";

// Validate an email
const isEmailValid = emailValidation("test@example.com");
console.log(isEmailValid); // Output: true

// Validate a URL
const isUrlValid = urlValidation("https://www.example.com");
console.log(isUrlValid); // Output: true

const isIpV4Valid = ipV4Validation("192.168.0.1");
console.log(isIpV4Valid); // Output: true

const isIpV6Valid = ipV6Validation("2001:0db8:85a3:0000:0000:8a2e:0370:7334");
console.log(isIpV6Valid); // Output: true

// Validate a phone number (E.164 format)
const isPhoneValid = phoneNumberValidation("+1234567890");
console.log(isPhoneValid); // Output: true

// Validate password strength (minimum 8 characters, at least one letter and one number)
const isPasswordStrong = passwordStrengthValidation("Password123");
console.log(isPasswordStrong); // Output: true

// Validate a Malawi phone number
const isMalawiPhoneValid = malawiPhoneNumberValidation("0999123456");
console.log(isMalawiPhoneValid); // Output: true

// Validate a custom phone number format
const isCustomPhoneValid = customPhoneNumberValidation("+1-123-456-7890", "1");
console.log(isCustomPhoneValid); // Output: true
```

### Example 3: Custom Find and Replace

```typescript
import { findAndReplace } from "@skipper116/string-utilities";

// Find and replace occurrences of a string
const newString = findAndReplace("Hello World! Hello Everyone!", "Hello", "Hi");
console.log(newString); // Output: 'Hi World! Hi Everyone!'
```

### Example 4: Generate Unique IDs

```typescript
import { generateUniqueId } from "@skipper116/string-utilities";

// Generate a unique ID with an optional prefix
const uniqueId = generateUniqueId("user");
console.log(uniqueId); // Output: 'user_xxxxxxx' (random characters)
```

```typescript
import { generateUUIDv7 } from "@skipper116/string-utilities";

const uuid = generateUUIDv7();
console.log(uuid); // Output: 'xxxxxxxx-xxxx-7xxx-yxxx-xxxxxxxxxxxx' (random characters)
```

### Example 5: Alphanumeric and Length Check Validations

```typescript
import { alphanumericCheck, lengthCheck } from "@skipper116/string-utilities";

// Check if a string is alphanumeric
const isAlphanumeric = alphanumericCheck("abc123");
console.log(isAlphanumeric); // Output: true

// Validate the length of a string
const isLengthValid = lengthCheck("Hello World", 5, 20);
console.log(isLengthValid); // Output: true
```

---

## API Reference

### String Manipulation Functions

1. **`trimAndLowercase(str: string): string`**  
   Trims the whitespace from the beginning and end of the string and converts the entire string to lowercase.

   **Example:**

   ```typescript
   const result = trimAndLowercase("  HELLO world  ");
   console.log(result); // 'hello world'
   ```

2. **`kebabCase(str: string): string`**  
   Converts a string to kebab case (lowercase with hyphens).

   **Example:**

   ```typescript
   const result = kebabCase("Hello World");
   console.log(result); // 'hello-world'
   ```

3. **`camelCase(str: string): string`**  
   Converts a string to camel case (lowercase with the first letter of each word capitalized).

   **Example:**

   ```typescript
   const result = camelCase("hello world from string utilities");
   console.log(result); // 'helloWorldFromStringUtilities'
   ```

4. **`snakeCase(str: string): string`**
   Converts a string to snake case (lowercase with underscores).

   **Example:**

   ```typescript
   const result = snakeCase("Hello World");
   console.log(result); // 'hello_world'
   ```

5. **`pascalCase(str: string): string`**
   Converts a string to pascal case (uppercase with the first letter of each word capitalized).

   **Example:**

   ```typescript
   const result = pascalCase("hello world from string utilities");
   console.log(result); // 'HelloWorldFromStringUtilities'
   ```

### API Reference (continued)

3. **`titleCase(str: string): string`**  
   Converts a string to title case, where the first letter of each word is capitalized.

   **Example:**

   ```typescript
   const result = titleCase("hello world from string utilities");
   console.log(result); // 'Hello World From String Utilities'
   ```

4. **`reverseString(str: string): string`**  
   Reverses the characters in a given string.

   **Example:**

   ```typescript
   const result = reverseString("Hello");
   console.log(result); // 'olleH'
   ```

5. **`findAndReplace(str: string, find: string, replace: string): string`**  
   Finds all occurrences of a substring and replaces them with another string.

   **Example:**

   ```typescript
   const result = findAndReplace("Hello World! Hello Everyone!", "Hello", "Hi");
   console.log(result); // 'Hi World! Hi Everyone!'
   ```

6. **`generateUniqueId(prefix?: string): string`**  
   Generates a unique ID with an optional prefix. The unique ID is based on a random string.

   **Example:**

   ```typescript
   const result = generateUniqueId("user");
   console.log(result); // 'user_xxxxxxxx' (random characters)
   ```

### String Validation Functions

1. **`emailValidation(email: string): boolean`**  
   Validates if the given string is a valid email format.

   **Example:**

   ```typescript
   const isValid = emailValidation("test@example.com");
   console.log(isValid); // true
   ```

2. **`urlValidation(url: string): boolean`**  
   Validates if the given string is a valid URL format.

   **Example:**

   ```typescript
   const isValid = urlValidation("https://www.example.com");
   console.log(isValid); // true
   ```

3. **`phoneNumberValidation(phoneNumber: string): boolean`**  
   Validates if the given string is a valid phone number format in E.164 standard.

   **Example:**

   ```typescript
   const isValid = phoneNumberValidation("+1234567890");
   console.log(isValid); // true
   ```

4. **`passwordStrengthValidation(password: string): boolean`**  
   Validates if the password meets minimum strength criteria: at least 8 characters long, and contains both letters and numbers.

   **Example:**

   ```typescript
   const isValid = passwordStrengthValidation("Password123");
   console.log(isValid); // true
   ```

5. **`alphanumericCheck(str: string): boolean`**  
   Checks if the string contains only alphanumeric characters (letters and numbers).

   **Example:**

   ```typescript
   const isValid = alphanumericCheck("abc123");
   console.log(isValid); // true
   ```

6. **`lengthCheck(str: string, min: number, max: number): boolean`**  
   Validates if the string length is within a specified range (inclusive).

   **Example:**

   ```typescript
   const isValid = lengthCheck("Hello World", 5, 20);
   console.log(isValid); // true
   ```

---

## Typescript Support

This package is fully typed with TypeScript, so you will get type definitions and autocompletion in supported editors.

### Example

```typescript
import {
  generateUniqueId,
  passwordStrengthValidation,
} from "@skipper116/string-utilities";

const userId: string = generateUniqueId("user");
const isStrongPassword: boolean = passwordStrengthValidation("MyPassword123");

console.log(userId); // Output: user_xxxxxxxx
console.log(isStrongPassword); // Output: true
```

---

## Contributing

We welcome contributions to improve this package. If you want to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed explanation.

More details can be found in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
