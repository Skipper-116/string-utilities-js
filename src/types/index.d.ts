export declare function trimAndLowercase(str: string): string;
export declare function kebabCase(str: string): string;
export declare function titleCase(str: string): string;
export declare function reverseString(str: string): string;
export declare function findAndReplace(
  str: string,
  find: string,
  replace: string
): string;
export declare function generateUniqueId(prefix?: string): string;
export declare function generateUUIDv7(): string;

export declare function emailValidation(email: string): boolean;
export declare function urlValidation(url: string): boolean;
export declare function ipV4Validation(ip: string): boolean;
export declare function ipV6Validation(ip: string): boolean;
export declare function phoneNumberValidation(phoneNumber: string): boolean;
export declare function malawiPhoneNumberValidation(
  phoneNumber: string
): boolean;
export declare function customPhoneNumberValidation(
  phoneNumber: string,
  countryCode: string
): boolean;
export declare function passwordStrengthValidation(password: string): boolean;
export declare function alphanumericCheck(str: string): boolean;
export declare function lengthCheck(
  str: string,
  min: number,
  max: number
): boolean;
