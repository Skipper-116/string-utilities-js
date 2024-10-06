"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findAndReplace_1 = require("../../src/operations/findAndReplace");
describe('findAndReplace', () => {
    it('should replace all occurrences of a substring', () => {
        const result = (0, findAndReplace_1.findAndReplace)('Hello World! Hello Everyone!', 'Hello', 'Hi');
        expect(result).toBe('Hi World! Hi Everyone!');
    });
    it('should return the original string if no match is found', () => {
        const result = (0, findAndReplace_1.findAndReplace)('Hello World!', 'Goodbye', 'Hi');
        expect(result).toBe('Hello World!');
    });
});
