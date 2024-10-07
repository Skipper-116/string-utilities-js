/**
 * Generates a unique identifier with an optional prefix.
 *
 * @param {string} [prefix=''] - An optional prefix for the unique ID. Defaults to an empty string.
 * @returns {string} A string containing the prefix (if provided) followed by an underscore and a random alphanumeric string.

 */
const generateUniqueId = (prefix: string = ''): string => {
  return `${prefix}_${Math.random().toString(36).slice(2, 11)}`;
};

/**
 * Generates a UUIDv7 (Universally Unique Identifier version 7).
 *
 * @returns {string} A string representation of a UUIDv7.
 *
 * @description
 * This function generates a UUIDv7 based on the current timestamp and random values.
 * The UUIDv7 format is defined in the UUID version 7 draft specification.
 * It combines a 48-bit timestamp with 80 bits of randomness.
 */
const generateUUIDv7 = (): string => {
  const timestamp = Date.now();
  const randomBytes = new Uint8Array(10);
  crypto.getRandomValues(randomBytes);

  const timestampBytes = new Uint8Array(6);
  timestampBytes[0] = (timestamp >> 24) & 0xff;
  timestampBytes[1] = (timestamp >> 16) & 0xff;
  timestampBytes[2] = (timestamp >> 8) & 0xff;
  timestampBytes[3] = timestamp & 0xff;
  timestampBytes[4] = (timestamp >> 24) & 0xff;
  timestampBytes[5] = (timestamp >> 16) & 0xff;

  const uuidBytes = new Uint8Array(16);
  uuidBytes.set(timestampBytes, 0);
  uuidBytes.set(randomBytes, 6);

  const uuidString: string[] = [];
  for (let i = 0; i < 16; i++) {
    uuidString.push(uuidBytes[i].toString(16).padStart(2, '0'));
  }

  return [
    uuidString.slice(0, 4).join(''),
    uuidString.slice(4, 6).join(''),
    uuidString.slice(6, 8).join(''),
    uuidString.slice(8, 10).join(''),
    uuidString.slice(10, 16).join(''),
  ].join('-');
};

export { generateUniqueId, generateUUIDv7 };
