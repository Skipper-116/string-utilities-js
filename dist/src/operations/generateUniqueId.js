"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUUIDv7 = exports.generateUniqueId = void 0;
const generateUniqueId = (prefix = "") => {
  return `${prefix}_${Math.random().toString(36).substr(2, 9)}`;
};
exports.generateUniqueId = generateUniqueId;
const generateUUIDv7 = () => {
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
  const uuidString = [];
  for (let i = 0; i < 16; i++) {
    uuidString.push(uuidBytes[i].toString(16).padStart(2, "0"));
  }
  return [
    uuidString.slice(0, 4).join(""),
    uuidString.slice(4, 6).join(""),
    uuidString.slice(6, 8).join(""),
    uuidString.slice(8, 10).join(""),
    uuidString.slice(10, 16).join(""),
  ].join("-");
};
exports.generateUUIDv7 = generateUUIDv7;
