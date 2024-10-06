"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphanumericCheck = void 0;
const alphanumericCheck = (str) => {
  const re = /^[a-z0-9]+$/i;
  return re.test(str);
};
exports.alphanumericCheck = alphanumericCheck;
