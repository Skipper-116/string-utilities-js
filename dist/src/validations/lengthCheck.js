"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lengthCheck = void 0;
const lengthCheck = (str, min, max) => {
  return str.length >= min && str.length <= max;
};
exports.lengthCheck = lengthCheck;
