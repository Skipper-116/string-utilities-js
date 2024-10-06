"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabCase = void 0;
const kebabCase = (str) => {
    return str
        .replace(/\s+/g, '-')
        .toLowerCase();
};
exports.kebabCase = kebabCase;
