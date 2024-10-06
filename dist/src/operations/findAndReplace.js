"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAndReplace = void 0;
const findAndReplace = (str, find, replace) => {
  return str.replace(new RegExp(find, "g"), replace);
};
exports.findAndReplace = findAndReplace;
