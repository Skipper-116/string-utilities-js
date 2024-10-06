"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.titleCase = void 0;
const titleCase = (str) => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
exports.titleCase = titleCase;
